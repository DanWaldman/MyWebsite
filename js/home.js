window.addEventListener("scroll", function() {showFunction()});
function showFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("description").style.display = "block";
    } else {
        document.getElementById("description").style.display = "none";
    }
}