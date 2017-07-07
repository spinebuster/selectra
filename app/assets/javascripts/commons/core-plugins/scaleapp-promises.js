NS('Commons.corePlugins');

Commons.corePlugins.ScaleAppPromises = function(core, options) {
  'use strict';

  var moduleStart = function(core, module, options) {
    return new Promise(function(resolve, error) {
      core.start(module, {
          options: options
        },
        resolve
      );
    });
  };

  var moduleStop = function(core, module) {
    return new Promise(function(resolve, error) {
      core.stop(module, function() {
        resolve();
      });
    });
  };

  var request = function(resourceId, data) {
    return new Promise(function(resolve, reject) {
      amplify.request({
        resourceId: resourceId,
        data: data,
        success: resolve,
        error: reject
      });
    });
  };

  /* Inicializar el plugin
   */
  var onPluginInit = function(instanceSandbox, options) {};

  /* Liberar medios
   */
  var onPluginDestroy = function() {};

  // Extender el core
  _.extend(core, {
    promises: {
      moduleStart: moduleStart,
      moduleStop: moduleStop,
      request: request
    }
  }, this);

  // Extender el sandbox
  _.extend(core.Sandbox.prototype, {
    promises: {
      moduleStart: moduleStart,
      moduleStop: moduleStop,
      request: request
    }
  }, this);

  return {
    init: onPluginInit,
    destroy: onPluginDestroy
  };
};
