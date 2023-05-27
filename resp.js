burger = document.querySelector('.burger');
navBar = document.querySelector('.navBar');
rightNav = document.querySelector('.rightNav');
navList = document.querySelector('.navList');

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('vclass-resp');
    navList.classList.toggle('vclass-resp');
    navBar.classList.toggle('h-nav-resp');
})