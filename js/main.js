const menuBtn = document.querySelectorAll('.menu_btn>ul>li');

menuBtn.forEach(function(v,k){
  v.onclick = function(){
    v.classList.toggle('active1')
  };
});