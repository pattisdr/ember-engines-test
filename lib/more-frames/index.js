/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'more-frames',
  lazyLoading: true,

  isDevelopingAddon: function() {
    return true;
  }
});
