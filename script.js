function about(){
    document.getElementById("about").scrollIntoView();

}
function book(){
    document.getElementById("book").scrollIntoView();
}
function gallery(){
    document.getElementById("gallery").scrollIntoView();
}
function openpics(pics){
    document.getElementById("pics").style.display = "flex";
    document.getElementById("pics").innerHTML = ""; // reset images
    for (i=0;i<pics.length;i++){
        let b = document.createElement("img");
        b.src = "imgs/" + pics[i];
        document.getElementById("pics").appendChild(b); // add all images
    }
}
function undo(){
    document.getElementById("pics").style.display = "none";
}