const express = require(`express`)
const server = new express()
const port = process.env.TFDT_SERVER_PORT || 3030

server.use(require(`./routes`))

server.use((error, req, res, next) => {
  console.error(error)
  next(error)
})

server.listen(port, error => error
  ? console.error(error.stack)
  : console.info(`Started server on port ${port}.`)
)
