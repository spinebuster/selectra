NS('Selectra.modules.locations');

Selectra.modules.locations.Model = function(sb) {
  this.sb = sb;

  var start = function(params) {
    this.trigger('locations_loaded');
    this.sb.emit('locations.locations_filters');
  };

  var destroy = function() {
  };

  return this.sb.backbone.Model.extend({
    // Guardar el SandBox
    sb: sb,

    // Valores de los filtros de búsqueda
    defaults: {
    },

    // Inicializa el modelo
    start: start,
    destroy: destroy
  });
};
