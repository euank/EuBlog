var qs = function(sel) {
  return document.querySelector(sel);
};
var qsa = function(sel) {
  return document.querySelectorAll(sel);
};

var show = function(sel) {
  var els = qsa(sel);
  for(var i=0;i<els.length;i++) {
    els[i].classList.remove('hide');
  }
};

var  showa = function(sels) {
  sels.forEach(function(sel) {
    show(sel);
  });
};

var hide = function(sel) {
  var els = qsa(sel);
  for(var i=0;i<els.length;i++) {
    els[i].classList.add('hide');
  }
};
var hidea = function(sels) {
  sels.forEach(function(sel) {
    hide(sel);
  });
};

module.exports = {
  show: show,
  showa: showa,
  hide: hide,
  hidea: hidea,
  qs: qs,
  qsa: qsa,
};

