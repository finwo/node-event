// Browser
(function(exports) {
  var registeredListeners = {};
  var eventSimulator = function( name, data ) {
    data = data || true;
    if( registeredListeners[name] ) {
      registeredListeners[name].forEach(function(callback) {
        data=data&&callback.call(null,data);
      });
    }
    return data;
  };
  eventSimulator.on=function(name,callback) {
    registeredListeners[name] = registeredListeners[name] || [];
    registeredListeners[name].push(callback);
    return eventSimulator;
  };
  exports.gevent = eventSimulator;
  if(typeof define === 'function') {
    define('global-events', function() {
      return eventSimulator;
    });
  }
})(typeof exports === 'object' ? exports : this);
