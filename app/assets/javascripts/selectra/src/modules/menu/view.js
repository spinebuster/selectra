// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.menu');

Selectra.modules.menu.View = function(sb, model, controller) {
  var initialize = function() {
    model.on('model_loaded', render, this);
  };

  var render = function() {
    $(this.el).html(JST[this.template()](model.toJSON()));
    var sidebar = model.get('sidebar');
    if (sidebar) {
      $('li#menu-' + sidebar).addClass('active');
    }
    return this;
  };

  var close = function() {
    $(this.el).html('');
    // removing all backbone events
    this.stopListening();
    // Removes all of the view's delegated events
    this.undelegateEvents();
  };

  var onClickSidebar = function(e) {
    e.preventDefault();

    if ($(e.currentTarget).children('ul').length === 0) {
      $('.menu-sidenav li').removeClass('active');
      $(e.currentTarget).addClass('active');
      $(e.currentTarget).parent().closest('li').addClass('active');
      var sidebar = e.currentTarget.id;
      controller.updateSidebar(sidebar);
    }
  };

  return sb.backbone.View.extend({
    _this: this,
    template: function() {
      return 'selectra/templates/menu';
    },
    el: sb.options.el,
    events: {
      'click .menu-sidenav li.submenu': 'onClickSidebar'
    },
    initialize: initialize,
    render: render,
    close: close,
    onClickSidebar: onClickSidebar
  });
};
