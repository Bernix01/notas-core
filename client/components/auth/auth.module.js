'use strict';

angular.module('coreApp.auth', [
  'coreApp.constants',
  'coreApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
