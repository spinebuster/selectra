NS('Commons.corePlugins');

Commons.corePlugins.ScaleAppHasher = function(core) {
  var paramName = 'x';

  // Dado un hash de parametros, devuelve una cadena con formato
  // string de los parametros para ser usados en una url
  var encodeURIQuery = function(params) {
    return $.param(params);
  };

  // Dado una url y un hash de parametros
  // redirige el hasher a esa url
  var redirectTo = function(url, params) {
    var dir = url + '?' + paramName + '=' + encodeParams(params);
    return hasher.setHash(dir);
  };

  var decodeParams = function(params) {
    return JSON.parse(params[paramName]);
  };

  var encodeParams = function(params) {
    return JSON.stringify(params);
  };

  var getCurrentHash = function() {
    var actualHash = hasher.getHash();
    var urlParameters = actualHash.split('?');
    return urlParameters[0];
  };

  core.Sandbox.prototype.encodeURIQuery = encodeURIQuery;
  core.Sandbox.prototype.redirectTo = redirectTo;
  core.Sandbox.prototype.getCurrentHash = getCurrentHash;
};
