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
