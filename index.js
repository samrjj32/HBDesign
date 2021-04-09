const text= document.getElementById("sec2-parllx-text");
const btn= document.getElementById("sec2-parllx-btn");

// const img= document.getElementById("onChair");



document.addEventListener("scroll", function (e) {
    let scroll = window.pageYOffset;
   


    text.style.top = (-scroll/20 ) + "%" ;
    btn.style.marginLeft = (-scroll/10 ) + "%" ;
    // img.style.right = (scroll/70 ) + "%" ;
    // text.style.fontSize=(scroll/6)+ "px" ;
  });