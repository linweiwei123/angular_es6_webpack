/**
 * Created by linww on 2016/10/5.
 */
routes.$inject = ['$stateProvider'];

export default function routes($stateProvider){
    $stateProvider.state('home',{
        url:'/',
        template:require('./home.html'),
        controller:'HomeController',
        controllerAs:'home'
    })

}