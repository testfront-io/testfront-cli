# testfront-cli

Install with `npm i testfront-cli --save-dev`.

After installation, a new `"testfront"` entry will be automatically added to your package's `scripts`.

You can then run any of the commands below within your package directory - e.g., `npm run testfront devtools-server`.


## devtools-server

Starts the DevTools Server on port 3030. You can override the port by setting the `TFDT_SERVER_PORT` environment variable.

This allows the [devtools extension](https://github.com/testfront-io/testfront-devtools) to save tests to your package directory. The server will create a directory called `__testfront__`, which should be committed as you solidify your tests.
