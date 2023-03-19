function menuShow() {
   let menuMobile =document.querySelector('.mobile-menu');
   if(menuMobile.classList.contains('open')){
      menuMobile.classList.remove('open');
   } else{
      menuMobile.classList.add('open')
   }
}

function scrollShow() {
window.addEventListener("scroll", function() {
   var items = document.querySelectorAll(".item");
   var windowHeight = window.innerHeight;
   for (var i = 0; i < items.length; i++) {
     var pos = items[i].getBoundingClientRect().top;
     if (pos < windowHeight) {
       items[i].classList.add("show");
     }
   }
 });   
}
scrollShow();

 