// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.locations_results');

Selectra.modules.locations_results.Controller = function(sb) {
  return function(model) {
    var includeLocation = function(location) {
      this.model.includeLocation(location);
    };

    var editLocation = function(locationId) {
      this.sb.emit('locations.new_location', {
        locationId: locationId
      });
    };

    var updateLocation = function(location) {
      this.model.updateLocation(location);
    };

    var deleteLocation = function(locationId) {
      this.model.deleteLocation(locationId);
    };

    var initialize = function() {
      // Cargar las colecciones
      this.model.start(this.sb.options);

      this.sb.on('location_modal.location_created',
        this.sb.bind(includeLocation, this)
      );
      this.sb.on('location_modal.location_updated',
        this.sb.bind(updateLocation, this)
      );
      this.sb.on('location_modal.location_deleted',
        this.sb.bind(deleteLocation, this)
      );
    };

    var destroy = function() {
      this.sb.off('location_modal.location_created');
      this.sb.off('location_modal.location_updated');
      this.sb.off('location_modal.location_deleted');
    };

    var controller = {
      sb: sb,
      model: model,
      initialize: initialize,
      destroy: destroy,
      includeLocation: includeLocation,
      editLocation: editLocation,
      updateLocation: updateLocation,
      deleteLocation: deleteLocation
    };

    return controller;
  };
};
