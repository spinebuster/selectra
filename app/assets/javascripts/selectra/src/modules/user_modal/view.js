// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.user_modal');

Selectra.modules.user_modal.View = function(sb, model, controller) {
  var initialize = function() {
    model.on('data_loaded', render, this);
    model.on('create_user_ended', function(user) {
      controller.emitUserCreated(user);
      this.closeModal();
    }, this);
    model.on('edit_user_ended', function(user) {
      controller.emitUserUpdated(user);
      this.closeModal();
    }, this);
  };

  var render = function() {
    $('.user-modal-loading').hide();

    $(this.el).html(JST[this.template()](model.toJSON()));
    $(this.el).modal('show');
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
    controller.close();
  };

  var getHashData = function(view) {
    var newUser = {
      name: $('#userForm #inputName').val(),
      surname: $('#userForm #inputSurname').val(),
      email: $('#userForm #inputEmail').val(),
      password: $('#userForm #inputPass').val(),
      active: $('#inputActive').prop('checked')
    };

    return newUser;
  };

  var onClickCreateUser = function(e) {
    e.preventDefault();

    var user = getHashData();
    if (this.initValidate()) {
      controller.createUser(user);
    }
  };

  var onClickEditUser = function(e) {
    e.preventDefault();

    if (this.initValidate()) {
      var user = getHashData();
      var userId = $(e.currentTarget).data('userid');
      controller.editUser(userId, user);
    }
  };

  var initValidate = function() {
    jQuery.validator.addMethod('isEmail', function(email) {
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailReg.test(email);
    }, '');

    $('#userForm').validate({
      rules: {
        inputName: {
          required: true
        },
        inputEmail: {
          isEmail: true,
          required: true
        },
        inputPass: {
          required: true
        }
      },
      messages: {
        inputName: {
          required: ''
        },
        inputEmail: {
          isEmail: '',
          required: ''
        },
        inputPass: {
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
    return $('#userForm').valid();
  };

  return sb.backbone.View.extend({
    _this: this,
    template: function() {
      return 'selectra/templates/user_modal';
    },
    el: sb.options.el,
    events: {
      'click .modal-header button.close': 'closeModal',
      'hidden.bs.modal': 'closeModal',
      'click #btnCreateUser': 'onClickCreateUser',
      'click #btnEditUser': 'onClickEditUser'
    },
    initialize: initialize,
    render: render,
    close: close,
    closeModal: closeModal,
    onClickCreateUser: onClickCreateUser,
    onClickEditUser: onClickEditUser,
    initValidate: initValidate
  });
};
