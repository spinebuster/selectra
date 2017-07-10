// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.user_modal');

Selectra.modules.user_modal.Model = function(sb) {
  this.sb = sb;

  var start = function(params) {
    this.trigger('data_loaded');
  };

  var destroy = function() {
  };

  return this.sb.backbone.Model.extend({
    // Guardar el SandBox
    sb: sb,

    // Valores de los filtros de búsqueda
    defaults: {
      user: null
    },

    // Inicializa el modelo
    start: start,
    destroy: destroy
  });
};
