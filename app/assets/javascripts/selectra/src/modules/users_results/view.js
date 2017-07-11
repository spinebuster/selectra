// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.users_results');

Selectra.modules.users_results.View = function(sb, model, controller) {
  var initialize = function() {
    model.on('users_results_loaded', render, this);
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

  var onClickEditUser = function(e) {
    e.preventDefault();

    $('.user-modal-loading').show();
    var userId = $(e.currentTarget).data('userid');
    controller.editUser(userId);
  };

  var onClickDeleteUser = function(e) {
    e.preventDefault();

    var userId = $(e.currentTarget).data('userid');
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
        controller.deleteUser(userId);
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
      return 'selectra/templates/users_results';
    },
    el: sb.options.el,
    events: {
      'click button.btnEditUser': 'onClickEditUser',
      'click button.btnDeleteUser': 'onClickDeleteUser'
    },
    initialize: initialize,
    render: render,
    close: close,
    onClickEditUser: onClickEditUser,
    onClickDeleteUser: onClickDeleteUser
  });
};
