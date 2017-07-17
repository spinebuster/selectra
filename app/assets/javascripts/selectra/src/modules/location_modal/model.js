// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.location_modal');

Selectra.modules.location_modal.Model = function(sb) {
  this.sb = sb;

  var createLocation = function(location) {
    // Mostramos spinner y deshabilitamos el botón de crear
    $('.location-loading').show();
    $('button#btnCreateLocation').attr('disabled', 'disabled');

    sb.request({
      resourceId: 'service_newLocation',
      data: {
        location: location
      },
      success: sb.bind(function(data) {
        // Ocultamos spinner y habilitamos botón crear
        $('.location-loading').hide();
        $('button#btnCreateLocation').removeAttr('disabled');

        this.trigger('create_location_ended', data);
      }, this)
    });
  };

  var getLocation = function(locationId, next) {
    sb.request({
      resourceId: 'service_location',
      data: {
        id: locationId
      },
      success: sb.bind(function(data) {
        this.set('location', data.data);
        next(null);
      }, this)
    });
  };

  var editLocation = function(locationId, location) {
    // Mostramos spinner y deshabilitamos los botones editar y borrar
    $('.location-loading').show();
    $('button#btnEditLocation').attr('disabled', 'disabled');

    sb.request({
      resourceId: 'service_editLocation',
      data: {
        id: locationId,
        location: location
      },
      success: sb.bind(function(data) {
        // Ocultamos spinner y habilitamos botones editar y borrar
        $('.location-loading').hide();
        $('button#btnEditLocation').removeAttr('disabled');

        this.trigger('edit_location_ended', data);
      }, this)
    });
  };

  var start = function(params) {
    var self = this;
    if (_.isObject(params.locationId)) {
      self.trigger('data_loaded');
    } else {
      scaleApp.util.runWaterfall(
        [
          sb.bind(getLocation, this, params.locationId)
        ], function(err, result) {
          self.trigger('data_loaded');
        }
      );
    }
  };

  var destroy = function() {
  };

  return this.sb.backbone.Model.extend({
    // Guardar el SandBox
    sb: sb,

    // Valores de los filtros de búsqueda
    defaults: {
      location: null
    },

    // Inicializa el modelo
    start: start,
    destroy: destroy,
    createLocation: createLocation,
    getLocation: getLocation,
    editLocation: editLocation
  });
};
