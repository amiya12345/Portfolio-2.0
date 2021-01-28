window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})
document.getElementById("name").innerHTML = "Amiya Ranjan";
document.getElementById("skills").innerHTML=" Digital Product Designer";
document.getElementById("other_works").innerHTML="OTHERS CREATIVE WORKS";

function jump(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

