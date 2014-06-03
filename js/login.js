var dh = require("./domHelpers");
var config = require("./config");
var main = require("./main");


module.exports.show = function() {
  dh.hidea(['#managediv', '#loadingdiv']);
  dh.show("#logindiv");
};

dh.qs('#loginbtn').onclick = function() {
  config.set(dh.qs("#AWS_ID").value, dh.qs("#AWS_SECRET").value, dh.qs("#S3_BUCKET").value, dh.qs("#loginremember").checked);
  main.init();
};
