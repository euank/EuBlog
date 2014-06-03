var config = require("./config");
var dh = require("./domHelpers");

module.exports.init = function(){
  dh.hidea(["#loadingdiv", "#logindiv", '#managediv']);
  dh.show("#loadingdiv");
};
module.exports.show = function() {
  dh.hidea(["#loadingdiv", "#logindiv", '#managediv']);
  dh.show("#managediv");
};
