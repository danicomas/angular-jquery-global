'use strict';
angular.module('angular-jquery-global', []).factory('jqueryGlobal', [function () {
    return $.global;
}]).provider('$jqueryGlobal', function () {
    return {
        preferCulture: function (language) {
            $.global.preferCulture(language);
        },
        $get: function () {
            return {

            }
        }
    }
});