function w3_open() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("nav-burger-container").classList.add("hide");
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("nav-burger-container").classList.remove("hide");

}
console.log('hey world');