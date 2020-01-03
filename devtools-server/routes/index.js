const routes = require(`express`).Router()

routes.use(`/data`, require(`./data`))

module.exports = routes
