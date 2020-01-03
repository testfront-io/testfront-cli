#!/usr/bin/env node

try {
  const packagePath = `${__dirname.split(`/node_modules/testfront-cli`).shift()}/package.json`
  const packageJson = require(packagePath)
  const stringifyPackage = require(`stringify-package`)
  const fs = require(`fs`)

  if (packageJson) {
    if (!packageJson.scripts) {
      packageJson.scripts = {}
    }

    if (!packageJson.scripts.testfront) {
      packageJson.scripts.testfront = `testfront`

      fs.writeFile(packagePath, stringifyPackage(packageJson), `utf8`, error => {
        if (error) {
          throw error
        } else {
          console.log(`The "testfront" entry was successfully added to your package.json scripts.`)
        }
      })
    }
  }
} catch (error) {
  console.error(`testfront-cli was unable to add the "testfront" entry to your package.json scripts due to the following error:`, error)
}
