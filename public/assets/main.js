var hasProp = {}.hasOwnProperty;

window.addEventListener('load', function() {
  var editor;
  ContentTools.StylePalette.add([new ContentTools.Style('Author', 'author', ['p'])]);
  editor = ContentTools.EditorApp.get();
  editor.init('*[data-editable]', 'data-name');
  editor.addEventListener('saved', function(ev) {
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
});
