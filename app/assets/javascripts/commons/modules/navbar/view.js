NS('Commons.modules.navbar');

Commons.modules.navbar.View = function(sb, model, controller) {
  var initialize = function() {
    model.on('model_loaded', render, this);
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

  return sb.backbone.View.extend({
    _this: this,
    template: function() {
      return 'commons/templates/navbar';
    },
    el: sb.options.el,

    initialize: initialize,
    render: render,
    close: close
  });
};
