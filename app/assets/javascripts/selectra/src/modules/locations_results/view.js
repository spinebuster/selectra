// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.locations_results');

Selectra.modules.locations_results.View = function(sb, model, controller) {
  var initialize = function() {
    model.on('locations_results_loaded', render, this);
  };

  var render = function() {
    $(this.el).html(JST[this.template()](model.toJSON()));
    return this;
  };

  var close = function() {
    $(this.el).html('');
    // removing all backbone events
    this.stopListening();
    // Removes all of the view's delegated events
    this.undelegateEvents();
  };

  var onClickEditLocation = function(e) {
    e.preventDefault();

    $('.location-modal-loading').show();
    var locationId = $(e.currentTarget).data('locationid');
    controller.editLocation(locationId);
  };

  var onClickDeleteLocation = function(e) {
    e.preventDefault();

    var locationId = $(e.currentTarget).data('locationid');
    swal({
      title: 'Confirmar operación',
      text: 'Aceptando la operación se eliminará la localización',
      type: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar',
      confirmButtonClass: 'btn-primary',
      closeOnCancel: false,
      closeOnConfirm: true
    }, function(isConfirm) {
      if (isConfirm) {
        controller.deleteLocation(locationId);
      } else {
        swal({
          title: 'Operación cancelada',
          type: 'error',
          timer: 1000,
          showConfirmButton: false
        });
      }
    });
  };

  return sb.backbone.View.extend({
    _this: this,
    template: function() {
      return 'selectra/templates/locations_results';
    },
    el: sb.options.el,
    events: {
      'click button.btnEditLocation': 'onClickEditLocation',
      'click button.btnDeleteLocation': 'onClickDeleteLocation'
    },
    initialize: initialize,
    render: render,
    close: close,
    onClickEditLocation: onClickEditLocation,
    onClickDeleteLocation: onClickDeleteLocation
  });
};
