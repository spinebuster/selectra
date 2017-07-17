// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.locations_filters');

Selectra.modules.locations_filters.View = function(sb, model, controller) {
  var initialize = function() {
    model.on('locations_filters_loaded', render, this);
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

  var onClickToogleAcordeon = function(e) {
    var icono = $(e.currentTarget).find('span');
    if (icono.hasClass('glyphicon-chevron-down')) {
      icono.removeClass('glyphicon-chevron-down');
      icono.addClass('glyphicon-chevron-up');
    } else {
      icono.removeClass('glyphicon-chevron-up');
      icono.addClass('glyphicon-chevron-down');
    }
  };

  var onClickSearchLocations = function(e) {
    e.preventDefault();

    $('.locations-mostrando').show();
    var icono = $('.accordion-toggle.locations-filters').find('span');
    if (icono.hasClass('glyphicon-chevron-down')) {
      icono.removeClass('glyphicon-chevron-down');
      icono.addClass('glyphicon-chevron-up');
    } else {
      icono.removeClass('glyphicon-chevron-up');
      icono.addClass('glyphicon-chevron-down');
    }

    var params = {
      name: $('#inputName').val()
    };

    controller.getLocations(params);
  };

  return sb.backbone.View.extend({
    _this: this,
    template: function() {
      return 'selectra/templates/locations_filters';
    },
    el: sb.options.el,
    events: {
      'click a.accordion-toggle.locations-filters': 'onClickToogleAcordeon',
      'click button#btnSearchLocations': 'onClickSearchLocations'
    },
    initialize: initialize,
    render: render,
    close: close,
    onClickToogleAcordeon: onClickToogleAcordeon,
    onClickSearchLocations: onClickSearchLocations
  });
};
