var _extend = require('lodash/extend')
	, $ = require('jquery');

module.exports = {
	get: function (options) {
		var opts = {
				type: 'GET',
				dataType: 'json',
				timeout: 600000 //10min
			};

		var _success = options.success || new Function
			, _error = options.error || new Function;

		opts.success = function (res) {
			if (res.c == 0) {
				_success(res.r);
			} else {
				_error(res.m, res.c);
				console.log(res.m || 'Unknown Error');
			}
		};
		opts.error = function () {
			console.log('Network Error!');
		};

		_extend(opts, options)
		$.ajax(opts);
	},


	post: function (options) {
		var opts = {
				type: 'POST',
				dataType: 'json',
				timeout: 600000 //10min
			},
			data = {}

		for (var k in opts.data) {
			if (typeof opts.data[k] === 'object') {
				data[k] = JSON.stringify(opts.data[k])
			} else {
				data[k] = opts.data[k]
			}
		}

		opts.data = data

		var _success = options.success || new Function
			, _error = options.error || new Function;
		opts.success = function (res) {
			if (res.c == 0) {
				_success(res.r);
			} else {
				_error(res.m, res.c);
				console.log(res.m || 'Unknown Error');
			}
		};
		opts.error = function () {
			console.log('Network Error!');
		};

		_extend(opts, options)
		$.ajax(opts);
	},


	form: function (options) {
		options.url = _prependApiVersion(options.url)
		var opts = {
			type: 'POST',
			timeout: 60000,
			contentType: false,
			processData: false
		}
		_extend(opts, options)

		var formData = new FormData()
		for (var key in opts.data) {
			formData.append(key, opts.data[key])
		}
		opts.data = formData

		var _success = options.success || new Function
			, _error = options.error || new Function
		opts.success = function (res) {
			if (res.c == 0) {
				_success(res.r)
			} else {
				_error(res.m, res.c)
			}
		}
		opts.error = function () {
			console.log('Network Error!')
		}

		$.ajax(opts)
	}
}
