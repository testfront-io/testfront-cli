#!/usr/bin/env node

process.on(`uncaughtException`, error => console.error(error))
process.on(`unhandledRejection`, error => console.error(error))

const spawn = require(`cross-spawn`)
const scriptKey = process.argv.pop()

const result = spawn.sync(`node`, [ require.resolve(`./${scriptKey}`) ], { stdio: 'inherit' })

if (result.signal) {
  process.exit(1)
}

process.exit(result.status)
