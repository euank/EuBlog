var editor = require('./editor');
var config = require("./config");
var login = require("./login");

function init() {
  if(config.init()) {
    editor.init();
    editor.show();
  } else {
    login.show();
  }
}

module.exports.init = init;

init();

