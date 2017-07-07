NS('Commons.corePlugins');

Commons.corePlugins.ScaleAppRequest = function(core) {
  var request = function(options) {
    var _default = {error: requestError};

    // Deep extend
    var _options = $.extend(true, {}, _default, options);
    return amplify.request(_options);
  };

  var requestError = function(text, status) {
    var textoError = JSON.parse(text);
    // Lanzar un evento de error a la aplicacion
    core.emit('error.request', {text: textoError});
  };

  core.Sandbox.prototype.request = request;
  core.Sandbox.prototype.requestError = requestError;
};
