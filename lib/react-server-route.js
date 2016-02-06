require(`babel-register`)();

import React from 'react';
import ReactDOM, { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import fs from 'fs';
import Path from 'path';
import FS from "q-io/fs";
import routes from '../encrypt-main.jsx';
var index = React.createFactory(require(`../pages/encrypt/index.jsx`));

module.exports = function(outputPath, callback) {
  var moduleDetectRegEx = new RegExp(`.jsx$`);

  if (process.env.NPM_CONFIG_PRODUCTION !== `true`) {
    // Remove all files from the module cache that are in the view folder.
    Object.keys(require.cache).map(function(module) {
      if (moduleDetectRegEx.test(require.cache[module].filename)) {
        console.log(`Clear cache file for: `, require.cache[module].filename);
        delete require.cache[module];
      }
    });
  }
  match({ routes, location: outputPath }, (error, redirectLocation, renderProps) => {
    if (error) {
      console.log(`error:`, error);
      return callback(error);
    } else if (renderProps) {
      FS.makeTree(Path.join(__dirname, `..`, `public`, outputPath)).then(function() {
        var contentOfTheFile = ReactDOM.renderToString(index({
          markup: renderToString(<RouterContext {...renderProps} />)
        }));

        var nameOfTheFile = Path.join(__dirname, `..`, `public`, outputPath, `index.html`);

        fs.writeFile(nameOfTheFile, contentOfTheFile, function(err) {
          if (err) {
            console.log(err);
            return callback(err, nameOfTheFile);
          }
          console.log(`Done writing `, nameOfTheFile);
          callback(null, nameOfTheFile);
        });
      }).catch(function(e) {
        console.log(e);
      });
      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.
    } else {
      return callback(null, `Not found`);
    }
  });
};
