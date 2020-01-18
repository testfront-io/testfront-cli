# testfront-cli

Install with:
```
npm i testfront-cli --save-dev
```

After installation, a `testfront` entry will be automatically added to your package's `scripts`.

You can then run any of the commands below within your project directory.

For example:
```
npm run testfront devtools-server
```


## devtools-server

Starts the DevTools Server on port 3030.

You can override the port by setting the `TFDT_SERVER_PORT` environment variable.

The [devtools extension](https://github.com/testfront-io/testfront-devtools) uses this server to save your tests within your project directory.

You should commit the `__testfront__` directory as you solidify your tests.
