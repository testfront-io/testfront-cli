#!/usr/bin/env node

try {
  const packagePath = `${__dirname.split(`/node_modules/testfront-cli`).shift()}/package.json`
  const packageJson = require(packagePath)
  const stringifyPackage = require(`stringify-package`)
  const fs = require(`fs`)

  if (packageJson && packageJson.scripts && packageJson.scripts.testfront === `testfront`) {
    delete packageJson.scripts.testfront

    fs.writeFile(packagePath, stringifyPackage(packageJson), `utf8`, error => {
      if (error) {
        throw error
      } else {
        console.log(`The "testfront" entry was successfully removed from your package.json scripts.`)
      }
    })
  }
} catch (error) {
  console.error(`testfront-cli was unable to remove the "testfront" entry from your package.json scripts due to the following error:`, error)
}
