var button = document.getElementById("toggle-menu");
var navBurgerState = false;
var navList = document.getElementById("toggle-list");

button.addEventListener("click", () => {
    navBurgerState = !navBurgerState;
    (navBurgerState) ? navList.style.cssText = "display: block" : navList.style.cssText = "display: none";
})