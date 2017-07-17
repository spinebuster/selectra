// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.location_modal');

Selectra.modules.location_modal.View = function(sb, model, controller) {
  var initialize = function() {
    model.on('data_loaded', render, this);
    model.on('create_location_ended', function(location) {
      controller.emitLocationCreated(location);
      this.closeModal();
    }, this);
    model.on('edit_location_ended', function(location) {
      controller.emitLocationUpdated(location);
      this.closeModal();
    }, this);
    sb.on('location_modal.location_deleted', function() {
      this.closeModal();
    }, this);
  };

  var render = function() {
    $('.location-modal-loading').hide();

    $(this.el).html(JST[this.template()](model.toJSON()));
    $(this.el).modal('show');

    // Initialize datetimepicker
    var location = model.get('location');
    var defaultDate =
      location ? moment.utc(location.open_time) : moment().valueOf();
    $('#datetimepickerOpen').datetimepicker({
      toolbarPlacement: 'top',
      defaultDate: defaultDate
    });

    defaultDate =
      location ? moment.utc(location.close_time) : moment().valueOf();
    $('#datetimepickerClose').datetimepicker({
      toolbarPlacement: 'top',
      defaultDate: defaultDate
    });

    return this;
  };

  var close = function() {
    $(this.el).html('');
    // removing all backbone events
    this.stopListening();
    // Removes all of the view's delegated events
    this.undelegateEvents();
  };

  /**
   * Cierra el modal
   */
  var closeModal = function(e) {
    if (e) {
      e.preventDefault();
    }

    $(this.el).modal('hide');
    $('.sweet-overlay').hide();
    $('.sweet-alert').hide();
    controller.close();
  };

  var getHashData = function(view) {
    var newLocation = {
      name: $('#locationForm #inputName').val(),
      open_time: $('#locationForm #inputOpen').val(),
      close_time: $('#locationForm #inputClose').val()
    };

    return newLocation;
  };

  var onClickCreateLocation = function(e) {
    e.preventDefault();

    var location = getHashData();
    if (this.initValidate()) {
      controller.createLocation(location);
    }
  };

  var onClickEditLocation = function(e) {
    e.preventDefault();

    if (this.initValidate()) {
      var location = getHashData();
      var locationId = $(e.currentTarget).data('locationid');
      controller.editLocation(locationId, location);
    }
  };

  var onClickDeleteLocation = function(e) {
    e.preventDefault();

    var locationId = $(e.currentTarget).data('locationid');
    swal({
      title: 'Confirmar operación',
      text: 'Aceptando la operación se eliminará el usuario',
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

  var initValidate = function() {
    $('#locationForm').validate({
      rules: {
        inputName: {
          required: true
        },
        inputOpen: {
          required: true
        },
        inputClose: {
          required: true
        }
      },
      messages: {
        inputName: {
          required: ''
        },
        inputOpen: {
          required: ''
        },
        inputClose: {
          required: ''
        }
      },
      highlight: function(element) {
        $(element).closest('.field').addClass('has-error');
      },
      unhighlight: function(element) {
        $(element).closest('.field').removeClass('has-error');
      },
    });
    return $('#locationForm').valid();
  };

  return sb.backbone.View.extend({
    _this: this,
    template: function() {
      return 'selectra/templates/location_modal';
    },
    el: sb.options.el,
    events: {
      'click .modal-header button.close': 'closeModal',
      'hidden.bs.modal': 'closeModal',
      'click #btnCreateLocation': 'onClickCreateLocation',
      'click #btnEditLocation': 'onClickEditLocation',
      'click #btnDeleteLocation': 'onClickDeleteLocation'
    },
    initialize: initialize,
    render: render,
    close: close,
    closeModal: closeModal,
    onClickCreateLocation: onClickCreateLocation,
    onClickEditLocation: onClickEditLocation,
    onClickDeleteLocation: onClickDeleteLocation,
    initValidate: initValidate
  });
};
