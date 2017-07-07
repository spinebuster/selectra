NS('Selectra');

Selectra.handlebarsHelpers = function() {
  var paintMenu = function(menu, submenus) {
    var ret = '';

    ret += '<li id="menu-' + menu + '" class="submenu"><a href="#' + menu +
      '">' + submenus[menu] + '</a></li>';
    return new Handlebars.SafeString(ret);
  };

  var initialize = function() {
    // Registrar helpers de Handlebars
    Handlebars.registerHelper('paintMenu', paintMenu);
  };

  return {
    initialize: initialize
  };
}();
