module.exports = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require(`routeComponents/layer/notFoundPage`))
    },'notFoundPage')
}