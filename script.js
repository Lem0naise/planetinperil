function about(){
    window.scrollTo(0, 0);
    document.getElementById("book").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("title_img").src = "eco.webp"

}
function book(){
    window.scrollTo(0, 0);
    document.getElementById("about").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("book").style.display = "block";
    document.getElementById("title_img").src = "perils2.webp"
}
function gallery(){
    window.scrollTo(0, 0);
    document.getElementById("book").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("gallery").style.display = "block";
    document.getElementById("title_img").src = "eco.webp"
}