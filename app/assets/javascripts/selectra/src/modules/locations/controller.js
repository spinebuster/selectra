NS('Selectra.modules.locations');

Selectra.modules.locations.Controller = function(sb) {
  return function(model) {
    var newLocation = function() {
      this.sb.emit('locations.new_location', {});
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
      newLocation: newLocation
    };

    return controller;
  };
};
