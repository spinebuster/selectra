NS('Selectra.modules.locations');

Selectra.modules.locations.View = function(sb, model, controller) {
  var initialize = function() {
    model.on('locations_loaded', render, this);
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

  var onClickNewLocation = function(e) {
    e.preventDefault();

    $('.location-modal-loading').show();
    $('#collapseLocationsFilters').collapse('hide');
    var icono = $('.accordion-toggle.locations-filters').find('span');
    if (icono.hasClass('glyphicon-chevron-up')) {
      icono.removeClass('glyphicon-chevron-up');
      icono.addClass('glyphicon-chevron-down');
    }
    controller.newLocation();
  };

  return sb.backbone.View.extend({
    _this: this,
    template: function() {
      return 'selectra/templates/locations';
    },
    el: sb.options.el,
    events: {
      'click #btnNewLocation': 'onClickNewLocation'
    },
    initialize: initialize,
    render: render,
    close: close,
    onClickNewLocation: onClickNewLocation
  });
};
