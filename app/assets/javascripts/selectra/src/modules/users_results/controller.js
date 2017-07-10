// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.users_results');

Selectra.modules.users_results.Controller = function(sb) {
  return function(model) {
    var initialize = function() {
      // Cargar las colecciones
      this.model.start(this.sb.options);
    };

    var destroy = function() {
    };

    var controller = {
      sb: sb,
      model: model,
      initialize: initialize,
      destroy: destroy
    };

    return controller;
  };
};
