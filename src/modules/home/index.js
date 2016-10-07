/**
 * Created by linww on 2016/10/5.
 */
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';
import HomeController from './home.controller';

export default angular.module('app.home',[uirouter])
    .config(routing)
    .controller('HomeController',HomeController)
    .name;