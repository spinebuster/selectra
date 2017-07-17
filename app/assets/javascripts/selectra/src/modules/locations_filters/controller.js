// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.locations_filters');

Selectra.modules.locations_filters.Controller = function(sb) {
  return function(model) {
    var getLocations = function(params) {
      this.model.getLocations(params);
    };

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
      destroy: destroy,
      getLocations: getLocations
    };

    return controller;
  };
};
