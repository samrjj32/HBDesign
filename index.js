const text = document.getElementById("sec2-parllx-text");
const btn = document.getElementById("sec2-parllx-btn");

// const img= document.getElementById("onChair");

document.addEventListener("scroll", function (e) {
  let scroll = window.pageYOffset;

  text.style.top = -scroll / 20 + "%";
  // btn.style.marginLeft = (-scroll/10 ) + "%" ;
  // img.style.right = (scroll/70 ) + "%" ;
  // text.style.fontSize=(scroll/6)+ "px" ;
});

document.getElementById("toggle-btn").addEventListener("click", myFunction);

function myFunction() {
  var element = document.body;
  console.log(document.getElementById("toggle-btn").checked, "nmm");

  if (document.getElementById("toggle-btn").checked) {
    trans();
    element.classList.toggle("dark-mode");
  } else {
    trans();
    element.classList.remove("dark-mode");
  }

  console.log(element.classList, "mm");
}

trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};
