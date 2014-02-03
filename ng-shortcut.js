// Generated by CoffeeScript 1.6.3
(function() {
  "use strict";
  angular.module('ngShortcut', []).directive('shortcut', [
    '$document', function($document) {
      return {
        link: function(scope, element, attrs, controller) {
          var combo, combos, _i, _len, _results;
          combos = attrs.shortcut.split(',');
          _results = [];
          for (_i = 0, _len = combos.length; _i < _len; _i++) {
            combo = combos[_i];
            _results.push((function(combo) {
              var keycode, modifiers, parts;
              parts = combo.split('-');
              keycode = parseInt(parts[parts.length - 1], 10);
              modifiers = parts.slice(0, parts.length - 1);
              return $document.on('keydown', function(e) {
                var meta, _j, _len1, _ref;
                if (e.keyCode !== keycode) {
                  return;
                }
                _ref = ['shift', 'ctrl', 'alt', 'meta'];
                for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
                  meta = _ref[_j];
                  if (!(modifiers.indexOf(meta) === -1) !== e["" + meta + "Key"]) {
                    return;
                  }
                }
                return element.triggerHandler(attrs.shortcutEvent || 'click');
              });
            })(combo));
          }
          return _results;
        }
      };
    }
  ]);

}).call(this);
