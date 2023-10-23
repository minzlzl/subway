const menuBtn = document.querySelectorAll('.menu_btn>ul>li'),
      menuBoxFig = document.querySelectorAll('.menu_box figure'),
      menuHover = document.querySelectorAll('.menu_txt_hover');
      

// //con2//
// let num2 = 0;
// menuBoxFig.forEach(function(v2,k2){
//   v2.addEventListener('mouseover',()=>{
//     menuHover[num].style = `display:block`
//     num2 = k2;
//   })
//   v2.addEventListener('mouseleave',()=>{
//     menuHover[num].style = `display:none`
//   })
// })




//con3//
let num = 0;
// arr = ['<li>~~</li>','']
menuBtn.forEach(function(v,k){
  v.onclick = function(){
    // 0.remove('a')  4
    // v.add('a')   2
    // num = k  2
    menuBtn[num].classList.remove('active1');
    v.classList.add('active1');
    num = k;
  };
});