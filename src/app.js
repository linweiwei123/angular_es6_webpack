/**
 * Created by linww on 2016/10/1.
 */
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/15bundles.css'
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import home from './modules/home';

angular.module('app',[uirouter,home])
    .config(routing);
