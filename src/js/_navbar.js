"use strict"

window.onload = (() => {

    const overlay = document.getElementById("overlay")
    const navigations = document.getElementsByClassName("nav-link")

    if (overlay) {
        overlay.addEventListener('click', () => {
            closeNav()
        })
    }

    if (navigations) {
        Object.keys(navigations).map(i => {
            navigations.item(i).onclick = closeNav
        })
    }

    function closeNav() {
        document.getElementById("btn-menu").checked = false
    }
})