"use strict"

window.onload = (() => {


    const imgs = document.getElementsByClassName("slider")[0].getElementsByClassName("img")
    const len = imgs.length
    let index = 0;


    setInterval(() => {
        Object.keys(imgs).map(i => {
            if (i != index)
                imgs.item(i).dataset.image = "normal"
        })
        imgs.item(index).dataset.image = "top"

        index++

        if (index >= len)
            index = 0

    }, 2500)
})