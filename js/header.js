const header = document.querySelector('header');
function tops(){
  if(window.pageYOffset >= 1){
    header.style = `top:0`
  } else{
    header.style = `top:6px`
  }
}
window.addEventListener("scroll",function(){
  tops();
})


const elA = document.querySelectorAll('.header_wrap>ul>li a'),
      sub = document.querySelector('.sub'),
      elUl = document.querySelectorAll('.sub>ul');
let ulNum = 0;
elA.forEach((v,k)=>{
  v.addEventListener("mouseover",function(){
    sub.style = `display:block`;
    let left = v.getBoundingClientRect().left;
    elUl[ulNum].style= `display:none`;
    elUl[k].style= `display:flex; left:${left}px`;
    ulNum = k;
  });
});
elUl.forEach((hover)=>{
  hover.addEventListener("mouseleave",function(){
    sub.style = `display:none`;
  });
});


const elTop = document.querySelector('.top');
elTop.addEventListener("click",function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
});