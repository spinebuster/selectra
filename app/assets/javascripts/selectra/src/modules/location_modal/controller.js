// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.location_modal');

Selectra.modules.location_modal.Controller = function(sb) {
  return function(model) {
    var createLocation = function(newLocation) {
      this.model.createLocation(newLocation);
    };

    var emitLocationCreated = function(location) {
      this.sb.emit('location_modal.location_created', location);
    };

    var editLocation = function(locationId, location) {
      this.model.editLocation(locationId, location);
    };

    var emitLocationUpdated = function(location) {
      this.sb.emit('location_modal.location_updated', location);
    };

    var deleteLocation = function(locationId) {
      this.sb.emit('location_modal.location_deleted', locationId);
    };

    var initialize = function() {
      // Cargar las colecciones
      this.model.start(this.sb.options);
    };

    var destroy = function() {
    };

    /**
     * Manda una señal para que se pare el modal
     */
    var close = function() {
      this.sb.emit('location_modal.close');
    };

    var controller = {
      sb: sb,
      model: model,
      initialize: initialize,
      destroy: destroy,
      close: close,
      createLocation: createLocation,
      emitLocationCreated: emitLocationCreated,
      editLocation: editLocation,
      emitLocationUpdated: emitLocationUpdated,
      deleteLocation: deleteLocation
    };

    return controller;
  };
};
