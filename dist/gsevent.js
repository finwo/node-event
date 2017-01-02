// Browser
(function ( exports ) {
  var registeredListeners = {},
      globalListeners     = [];
  var eventSimulator      = function ( name, data ) {
    data = data || true;
    globalListeners.forEach(function ( callback ) {
      data = data && callback.call(null, data, name);
    });
    if ( registeredListeners[ name ] ) {
      registeredListeners[ name ].forEach(function ( callback ) {
        data = data && callback.call(null, data);
      });
    }
    return data;
  };
  eventSimulator.on       = function ( name, callback ) {
    if ( typeof name === 'function' ) {
      globalListeners.push(name);
      return eventSimulator;
    }
    if ( name.forEach ) {
      name.forEach(function ( currentName ) {
        eventSimulator.on(currentName, callback);
      });
      return eventSimulator;
    }
    registeredListeners[ name ] = registeredListeners[ name ] || [];
    registeredListeners[ name ].push(callback);
    return eventSimulator;
  };
  exports.gsevent         = eventSimulator;
  if ( typeof define === 'function' ) {
    define('gsevent', function () {
      return eventSimulator;
    });
  }
})(typeof exports === 'object' ? exports : this);
