function about(){
    document.getElementById("book").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("title_img").src = "eco.webp"

}
function book(){
    document.getElementById("about").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("book").style.display = "block";
    document.getElementById("title_img").src = "perils2.jpg"
}
function gallery(){
    document.getElementById("book").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("gallery").style.display = "block";
    document.getElementById("title_img").src = "eco5.webp"
}