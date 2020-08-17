window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})
document.getElementById("name").innerHTML = "Amiya Ranjan";
document.getElementById("skills").innerHTML=" UI/UX Designer | UI Developer";