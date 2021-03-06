###What does an index.js file do in a bundle?
It lets you extend the core of NodeCG, adding nearly any additional functionality that your bundle may need.
An index.js file __must export an express app__, like this:

````javascript
var express = require('express'),
    app = module.exports = express();

app.get('/view/mybundle/customroute', function(req, res) {
  res.render(__dirname + 'somefile.jade', {name: "Some test data!", age: 23});
});
````

###What if my bundle relies on a npm package that NodeCG doesn't have?
You can use [squirrel](https://github.com/DamonOehlman/squirrel) to lazy-install and lazy-load any npm package that your bundle(s) need:
````javascript
var express = require('express'),
    app = module.exports = express(),
    squirrel = require('squirrel');

squirrel('jsdom', function(err, jsdom) {
  app.get('/view/mybundle', function(req, res) {
    //do something that requires jsdom
  });
});
````
