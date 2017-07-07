// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Commons.base.Module');

Commons.base.Module = function(model_class, view_class, controller_class) {
  return function(sb) {
    var initialize = function(opts) {
      if (model_class) {
        var bm  = model_class(this.sb);
        this.model = new bm();
      }

      if (controller_class) {
        var cm = controller_class(this.sb);
        this.controller = new cm(this.model);
      }

      if (view_class) {
        var bv = view_class(this.sb, this.model, this.controller);
        this.view = new bv();
      }

      // Inicializar el controlador, con esto se inicializara el modelo y renderizara la vista
      if (this.controller) {
        this.controller.initialize();
      }
    };

    var destroy = function() {
      if (this.view) {
        this.view.close();
      }

      if (this.controller) {
        this.controller.destroy();
      }

      if (this.model) {
        this.model.destroy();
      }
    };

    var module = {
      sb: sb,
      model: null,
      controller: null,
      view: null,
      init: initialize,
      destroy: destroy
    };
    return module;
  };
};
