# Basic Express
- [Installation](#Installation)
- [Creating a Server](#create-a-server)
- [Routing](#routing)
- [Static Files](#static-files)
- [Babel](#babel)
- [Cors](#cors)
- [Environment Variables](#environment-variables)

## Installation
- create a package.json file
```
npm init
```

- install express
```
$ npm install --save express
```

- in your `index.js` file:
    - import express
        ```javascript
        const express = require('express');
        ``` 
    - create the express object
        ```javascript
        const app = express();
        ```
## Create a Server
- specify a port and tell your express app to listen on that port
    ```javascript
    (`index.js`)
    const port = 3000;
    app.listen(port, () => {
        console.log(`console is running on port ${3000}`)
    })
    ```
- run the server - `$ node index.js`

## Routing
```javascript
app.METHOD('/[route]', (req, res) => {
    // do stuff here
})
```
- methods can be `get`, `post`, `put`, `delete`
- example: 
    ```javascript
    app.get('/', function (req, res) {
        res.send('<h1>Hello World!</h1>')
    })
    ```
- using **Router**: makes code more modular.  
    - to use: create a `router.js` file and create a router object
        ```javascript
        var express = require('express')
        var router = express.Router()
        ```
    - create the routes:
        ```javascript
        /* in router.js */
        router.get('/', function (req, res) {
            res.send('Birds home page')
        })
        ```
    - hook up the routes to the app

## Body Parser
- used to parse content from the body
- to install `$ npm install body-parser`
- to import (in `index.js`) `var bodyParser = require('body-parser')`
- to use json:
    ```javascript
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse various different custom JSON types as JSON
    app.use(bodyParser.json({ type: 'application/*+json' }))
    ```
    - we can now access the content via `req.body`

## Static files
```javascript
app.use(express.static(root, [options]));
```
- **root**: the directory where the static files are located
- example:
    ```javascript
    app.use(express.static('public'));
    ```
- you can now access static files: `http://localhost:3000/images/img_name.extensionname`

## Cors
- to install: `npm install cors`
- to import: `const cors = require('cors');`
- to use: `app.use('cors')`

## Environemnt Variables
- create a `.env` file and create variables
- to make variables available in your source code: use donenv: `$ npm install dotenv`
- import dotenv: `import 'dotenv/config';`
- to use: `process.env.[variable name]`

# Babel
- for using newer versions of java
- to install: `npm install @babel/core @babel/node --save-dev`
- add to start script in `package.json`: 
    ```javascript
    `"start": "nodemon --exec babel-node src/index.js"`
    ```
- create a `.babelrc` file for the config:
    ```javascript
    {
    "presets": [
        "@babel/preset-env"
    ]
    }
    ```


