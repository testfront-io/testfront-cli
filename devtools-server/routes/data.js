const data = require(`express`).Router()
const path = require(`path`)
const fs = require(`fs`)

/**
 * Use streams to read/write simple blobs of stringified JSON.
 * No point in stringifying/parsing anything here.
 */
const directory = `__testfront__`
const filename = path.join(directory, `data.json`)

if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory)
}

data.get(`/`, (req, res) => {
  fs.exists(filename, exists => {
    if (exists) {
      res.header(`Content-Type`, `application/json`)
      fs.createReadStream(filename, `utf8`).pipe(res)
    } else {
      res.end()
    }
  })
})

data.put(`/`, (req, res) => {
  req.pipe(fs.createWriteStream(filename, `utf8`))
  req.on(`end`, () => res.end())
})

module.exports = data
