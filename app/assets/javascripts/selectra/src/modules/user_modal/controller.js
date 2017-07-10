// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.user_modal');

Selectra.modules.user_modal.Controller = function(sb) {
  return function(model) {
    var initialize = function() {
      // Cargar las colecciones
      this.model.start(this.sb.options);
    };

    var destroy = function() {
    };

    /**
     * Manda una señal para que se pare el modal
     */
    var close = function() {
      this.sb.emit('user_modal.close');
    };

    var controller = {
      sb: sb,
      model: model,
      initialize: initialize,
      destroy: destroy,
      close: close
    };

    return controller;
  };
};
