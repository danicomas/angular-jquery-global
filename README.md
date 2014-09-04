angular-jquery-global
=====================

nikgraf/jquery-global (https://github.com/nikgraf/jquery-global) to AngularJS

### Scripts

```html
<script src="scripts/jquery.global.js" type="text/javascript"></script>
<script src="scripts/globinfo/jquery.glob.all.js" type="text/javascript"></script>
<script src="scripts/angular-jquery-global.js"></script>
```

### App

```js
var app = angular.module('YourApp', ['angular-jquery-global']);
```

```js
app.config(function ($jqueryGlobalProvider) {
  $jqueryGlobalProvider.preferCulture('ca-ES');
});
```

### Controller

```js
app.controller('eventsController', ['$scope', 'jqueryGlobal', function ($scope, jqueryGlobal) {
  $scope.objDate = jqueryGlobal.parseDate("2013/12/01 22:01:01", "yyyy/MM/dd HH:mm:ss");
  $scope.dateFormat = jqueryGlobal.format(objDate, "dd/MM/yyyy");
}]);
```

