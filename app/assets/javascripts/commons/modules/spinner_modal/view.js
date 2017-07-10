// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Commons.modules.spinner_modal');

Commons.modules.spinner_modal.View = function(sb, model, controller) {
  var initialize = function() {
    model.on('data_loaded', render, this);
  };

  var render = function() {
    $(this.el).html(JST[this.template](model.toJSON()));
    $(this.el).modal('show');
    return this;
  };

  var close = function() {
    $(this.el).modal('hide');
    $(this.el).html('');
    // removing all backbone events
    this.stopListening();
    // Removes all of the view's delegated events
    this.undelegateEvents();
  };

  return sb.backbone.View.extend({
    _this: this,
    template: 'commons/templates/spinner_modal',
    el: sb.options.el,
    events: {
    },
    initialize: initialize,
    render: render,
    close: close
  });
};
