/**
 * Created by linww on 2016/10/5.
 */
routing.$inject = ['$urlRouterProvider','$locationProvider'];

export default function routing($urlRouterProvider,$locationProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}