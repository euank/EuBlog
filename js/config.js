var config = null;
module.exports.init = function() {
  if(config) return true;
  if(localStorage.config) {
    config = localStorage.config;
    return true;
  }
  return false;
};

module.exports.set = function(awsid, awssecret, bucket, remember) {
  config = {
    AWS_ID: awsid,
    AWS_SECRET: awssecret,
    template_bucket: bucket
  };
  if(remember) {
    localStorage.config = config;
  }
};

module.exports.clear = function() {
  config = null;
  localStorage.config = null;
};

module.exports.get = function() {
  return config;
};
