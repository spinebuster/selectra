// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Commons.modules.spinner_modal');

Commons.modules.spinner_modal.Controller = function(sb) {
  return function(model) {
    var initialize = function() {
      this.model.start(this.sb.options.params);
    };

    var destroy = function() {
    };

    var controller = {
      sb: sb,
      model: model,
      initialize: initialize,
      destroy: destroy
    };

    return controller;
  };
};
