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
// const mediaQueryList = window.matchMedia('(max-width: 600px)')
elA.forEach((v,k)=>{
  v.addEventListener("mouseover",function(){  
    if(window.matchMedia("(min-width: 1650px)").matches){
      sub.style = `display:block`;
      let left = v.getBoundingClientRect().left;
      elUl[ulNum].style= `display:none`;
      elUl[k].style= `display:flex; left:${left}px`;
      ulNum = k;
    }else{
      sub.style = `display:block`;
      // sub.style = `display:none`;
      let left = v.getBoundingClientRect().left;
      elUl[ulNum].style= `display:none`;
      elUl[k].style= `display:block; left:${left - 45}px`;
      ulNum = k;
    }
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
