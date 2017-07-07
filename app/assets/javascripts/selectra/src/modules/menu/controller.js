// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.menu');

Selectra.modules.menu.Controller = function(sb) {
  return function(model) {
    var updateSidebar = function(sidebar) {
      this.model.updateSidebar(sidebar);
      this.sb.emit('menu.change_sidebar', sidebar);
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
      updateSidebar: updateSidebar
    };

    return controller;
  };
};
