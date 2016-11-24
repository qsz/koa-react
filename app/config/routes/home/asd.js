module.exports = (location, callback) => {
    require.ensure([], require => {
        callback(null, require(`routeComponents/home`))
    }, 'home')
}
