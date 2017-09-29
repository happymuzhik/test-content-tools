(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var initHeaderRules, initMain;

initMain = require('./init-main.coffee');

initHeaderRules = require('./init-header-rules.coffee');

window.addEventListener('load', function() {
  initHeaderRules();
  return initMain();
});

},{"./init-header-rules.coffee":2,"./init-main.coffee":3}],2:[function(require,module,exports){
var initHeaderRules;

initHeaderRules = function() {
  return ContentTools.StylePalette.add([new ContentTools.Style('Header', 'header', ['h1'])]);
};

module.exports = initHeaderRules;


},{}],3:[function(require,module,exports){
var initMain,
  hasProp = {}.hasOwnProperty;

initMain = function() {
  var editor;
  ContentTools.StylePalette.add([new ContentTools.Style('Author', 'author', ['p'])]);
  editor = ContentTools.EditorApp.get();
  editor.init('*[data-editable]', 'data-name');
  return editor.addEventListener('saved', function(ev) {
    var name, onStateChange, payload, regions;
    regions = ev.detail().regions;
    if (!Object.keys(regions).length) {
      return;
    }
    this.busy(true);
    payload = {};
    for (name in regions) {
      if (!hasProp.call(regions, name)) continue;
      payload[name] = regions[name];
    }
    console.log('pending...');
    onStateChange = function() {
      editor.busy(false);
      new ContentTools.FlashUI('ok');
      return console.log('done', payload);
    };
    return setTimeout(onStateChange, 2000);
  });
};

module.exports = initMain;


},{}]},{},[1])