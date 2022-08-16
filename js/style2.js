// Phần mobile
var box = document.querySelector('.boxbox');
var btnMobile = document.querySelector('.header-right-mobile');
var menuMobile = document.querySelector('.mobile-container');
// var headerMobile = document.querySelector('.header-mobile');
var xClose = document.querySelector('.mobile-container a:last-child');

xClose.onclick = function (){
    menuMobile.classList.remove('show');
};
box.onclick = function (){
    menuMobile.classList.remove('show');
};
menuMobile.onclick = function (e) {
    e.stopPropagation();
};
btnMobile.onclick = function (e){
    e.stopPropagation();
    menuMobile.classList.toggle('show');
};
