// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.locations_results');

Selectra.modules.locations_results.Model = function(sb) {
  this.sb = sb;

  var includeLocation = function(newLocation) {
    if (newLocation.success) {
      var locations = this.get('allLocations');
      locations.push(newLocation.data);
      locations = _.sortBy(locations, function(location) {
        return location.name.toLowerCase();
      });
      this.set('allLocations', locations);

      var message =
        'El usuario \'' + newLocation.data.name + '\' ha sido creado.';
      this.updateMessage(message, 'success');

      this.trigger('locations_results_loaded');
      $('#location_' + newLocation.data.id + ' td').effect(
        'highlight', {color: '#c1e2b3'}, 2000
      );
    } else {
      this.updateMessage(_.first(newLocation.errors.times), 'danger');

      this.trigger('locations_results_loaded');
    }
  };

  var updateLocation = function(newLocation) {
    if (newLocation.success) {
      var locations = this.get('allLocations');
      var locationUpdated = _.find(locations, function(location) {
        return location.id == newLocation.data.id;
      });
      var index = _.indexOf(locations, locationUpdated);
      locations[index] = newLocation.data;
      this.set('allLocations', locations);

      var message =
        'El usuario \'' + newLocation.data.name + '\' ha sido actualizado.';
      this.updateMessage(message, 'success');

      this.trigger('locations_results_loaded');
      $('#location_' + newLocation.data.id + ' td').effect(
        'highlight', {color: '#c1e2b3'}, 2000
      );
    } else {
      this.updateMessage(_.first(newLocation.errors.times), 'danger');

      this.trigger('locations_results_loaded');
    }
  };

  var deleteLocation = function(locationId) {
    sb.request({
      resourceId: 'service_deleteLocation',
      data: {
        id: locationId
      },
      success: sb.bind(function(data) {
        var locations = this.get('allLocations');
        var locationsUpdated = _.reject(locations, function(location) {
          return location.id == locationId;
        });
        this.set('allLocations', locationsUpdated);

        var message = 'El usuario \'' + data.data.name +
          '\' ha sido eliminado.';
        this.updateMessage(message, 'success');

        this.trigger('locations_results_loaded');
      }, this)
    });
  };

  var updateMessage = function(message, status) {
    this.set('message', message);
    this.set('newMessage', true);
    this.set('status', status);
  };

  var start = function(params) {
    this.set('allLocations', params.locations);

    this.trigger('locations_results_loaded');
  };

  var destroy = function() {
  };

  return this.sb.backbone.Model.extend({
    // Guardar el SandBox
    sb: sb,

    // Valores de los filtros de búsqueda
    defaults: {
      allLocations: null,
      message: null,
      newMessage: false,
      status: null
    },

    // Inicializa el modelo
    start: start,
    destroy: destroy,
    includeLocation: includeLocation,
    updateLocation: updateLocation,
    updateMessage: updateMessage,
    deleteLocation: deleteLocation
  });
};
