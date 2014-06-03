var jade = require('jade');
var ace = require('brace');
var config = require("./config").get;

require('brace/theme/monokai');
require('brace/mode/jade');

function Editor() {
  this.editor = null;
  this.AWS = AWS;
}

Editor.prototype.loadConfig = function() {
  this.store = new AWS.S3();
  //this.store.getObject({Bucket: this.bucket, Key: 'config.json'
};

Editor.prototype.init = function(AWS, bucket) {
  this.AWS = AWS;
  this.bucket = bucket;
  this.loadConfig();
};

var editor = ace.edit('editor');
editor.setTheme('ace/theme/monokai');
editor.getSession().setMode('ace/mode/jade');

document.querySelector('#compile').onclick = function() {
  var input = editor.getValue();
  jade.render(input, {}, function(err, html) {
    if(err) console.log(err);
    else document.querySelector("#rendered").srcdoc = html;
  });
};
