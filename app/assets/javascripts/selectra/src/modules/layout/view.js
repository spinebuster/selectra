NS('Selectra.modules.layout');

Selectra.modules.layout.View = function(sb) {
  return sb.backbone.View.extend({
    template: function() {
      return 'selectra/templates/layout';
    },
    el: sb.options.el,
    initialize: function() {
      this.render();
    },
    render: function() {
      $(this.el).html(JST[this.template()]());
      return this;
    },
    close: function() {
      $(this.el).html('');
      // removing all backbone events
      this.stopListening();
      // Removes all of the view's delegated events
      this.undelegateEvents();
    }
  });
};
