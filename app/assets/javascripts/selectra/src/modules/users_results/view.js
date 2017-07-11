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
    controller.editarProveedor(userId);
  };

  return sb.backbone.View.extend({
    _this: this,
    template: function() {
      return 'selectra/templates/users_results';
    },
    el: sb.options.el,
    events: {
      'click .btnEditUser': 'onClickEditUser',
    },
    initialize: initialize,
    render: render,
    close: close,
    onClickEditUser: onClickEditUser
  });
};
