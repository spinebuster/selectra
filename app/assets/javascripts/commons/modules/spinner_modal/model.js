// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Commons.modules.spinner_modal');

Commons.modules.spinner_modal.Model = function(sb) {
  this.sb = sb;

  var start = function(params) {
    if (params.text !== null) {
      this.set('text', params.text);
    }

    this.trigger('data_loaded');
  };

  var destroy = function() {};

  return this.sb.backbone.Model.extend({
    // Guardar el SandBox
    sb: sb,

    defaults: {
      text: 'Cargando...'
    },

    // Inicializa el modelo
    start: start,
    destroy: destroy
  });
};
