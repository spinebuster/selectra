// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.user_modal');

Selectra.modules.user_modal.View = function(sb, model, controller) {
  var initialize = function() {
    model.on('data_loaded', render, this);
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

  return sb.backbone.View.extend({
    _this: this,
    template: function() {
      return 'selectra/templates/user_modal';
    },
    el: sb.options.el,
    events: {
      'click .modal-header button.close': 'closeModal',
      'hidden.bs.modal': 'closeModal'
    },
    initialize: initialize,
    render: render,
    close: close,
    closeModal: closeModal
  });
};
