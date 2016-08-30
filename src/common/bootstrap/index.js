require('../routes/index');
angular.module('@@app', ['@@app.routes', 'ngResource']);
angular.bootstrap(document, ['@@app'], { strictDi: true });
