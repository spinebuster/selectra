// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Commons.modules.navbar');

Commons.modules.navbar.Model = function(sb) {
  this.sb = sb;

  var start = function(params) {
    this.trigger('model_loaded');
  };

  var destroy = function() {};

  return this.sb.backbone.Model.extend({
    // Guardar el SandBox
    sb: sb,

    // Lista de objectos posibles
    defaults: {
    },

    // Inicializa el modelo
    start: start,
    destroy: destroy
  });
};
