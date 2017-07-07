NS('Commons.modules.navbar');

Commons.modules.navbar.Controller = function(sb) {
  return function(model) {

    // Cargar las colecciones
    var initialize = function() {
      this.model.start(this.sb.options);
    };

    var destroy = function() {};

    var controller = {
      sb: sb,
      model: model,
      initialize: initialize,
      destroy: destroy
    };

    //controller.initialize();
    return controller;
  };
};
