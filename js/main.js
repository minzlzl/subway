const menuBtn = document.querySelectorAll('.menu_btn>ul>li'),
      menu = document.querySelectorAll('.menu')
console.log(menu)
// //con2//
let num = 0;
let num2 = 0;
// arr = ['<li>~~</li>','']
menuBtn.forEach(function(v,k){
  v.onclick = function(){
    // 0.remove('a')  4
    // v.add('a')   2
    // num = k  2
    menuBtn[num].classList.remove('active1');
    v.classList.add('active1');
    menu[num].classList.remove('active3')
    menu[k].classList.add('active3')
    num = k;
  };
});