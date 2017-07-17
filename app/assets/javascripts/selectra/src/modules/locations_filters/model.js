// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.locations_filters');

Selectra.modules.locations_filters.Model = function(sb) {
  this.sb = sb;

  var getLocations = function(params) {
    params.order = 'name';
    sb.request({
      resourceId: 'service_locations',
      data: params,
      success: sb.bind(function(data) {
        $('.locations-mostrando').hide();
        $('#collapseLocationsFilters').collapse('hide');

        this.sb.emit('locations_filters.locations_results', {
          locations: data.data.records
        });
      }, this)
    });
  };

  var start = function(params) {
    this.trigger('locations_filters_loaded');
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
    destroy: destroy,
    getLocations: getLocations
  });
};
