NS('Selectra.modules.users');

Selectra.modules.users.View = function(sb, model, controller) {
  var initialize = function() {
    model.on('users_loaded', render, this);
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

  var onClickNewUser = function(e) {
    e.preventDefault();

    $('.user-modal-loading').show();
    $('#collapseUsersFilters').collapse('hide');
    var icono = $('.accordion-toggle.users-filters').find('span');
    if (icono.hasClass('glyphicon-chevron-up')) {
      icono.removeClass('glyphicon-chevron-up');
      icono.addClass('glyphicon-chevron-down');
    }
    controller.newUser();
  };

  return sb.backbone.View.extend({
    _this: this,
    template: function() {
      return 'selectra/templates/users';
    },
    el: sb.options.el,
    events: {
      'click #btnNewUser': 'onClickNewUser'
    },
    initialize: initialize,
    render: render,
    close: close,
    onClickNewUser: onClickNewUser
  });
};
