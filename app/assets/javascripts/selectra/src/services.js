NS('Selectra');

Selectra.services = function() {
  var decoder = function(data, status, xhr, success, error) {
    if (status === 'success') {
      success(data, status);
    } else if (status === 'fail' || status === 'error') {
      error(xhr.responseText, status);
    }
  };

  // Define todas las peticiones request que se harán con Amplify
  var initialize = function() {
    amplify.request.define('service_users', 'ajax', {
      url: '/users.json',
      type: 'GET',
      decoder: decoder
    });

    amplify.request.define('service_newUser', 'ajax', {
      url: '/users.json',
      type: 'POST',
      decoder: decoder
    });

    amplify.request.define('service_user', 'ajax', {
      url: '/users/{id}.json',
      type: 'GET',
      decoder: decoder
    });

    amplify.request.define('service_editUser', 'ajax', {
      url: '/users/{id}.json',
      type: 'PUT',
      decoder: decoder
    });

    amplify.request.define('service_deleteUser', 'ajax', {
      url: '/users/{id}.json',
      type: 'DELETE',
      decoder: decoder
    });

    amplify.request.define('service_locations', 'ajax', {
      url: '/locations.json',
      type: 'GET',
      decoder: decoder
    });

    amplify.request.define('service_newLocation', 'ajax', {
      url: '/locations.json',
      type: 'POST',
      decoder: decoder
    });

    amplify.request.define('service_location', 'ajax', {
      url: '/locations/{id}.json',
      type: 'GET',
      decoder: decoder
    });

    amplify.request.define('service_editLocation', 'ajax', {
      url: '/locations/{id}.json',
      type: 'PUT',
      decoder: decoder
    });

    amplify.request.define('service_deleteLocation', 'ajax', {
      url: '/locations/{id}.json',
      type: 'DELETE',
      decoder: decoder
    });
  };

  return {
    initialize: initialize
  };
}();
