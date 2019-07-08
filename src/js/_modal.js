"use strict"

window.onload = (() => {

    const modals = document.getElementsByClassName("modal")
    const trigger = document.getElementsByClassName("modal-trigger")
    const closes = document.getElementsByClassName("modal-close")

    if (closes) {

        Object.keys(closes).map(i => {

            closes.item(i).addEventListener('click', () => {
                closeModal(modals.item(i).dataset.modal)
            })
        })
    }

    if (trigger) {

        Object.keys(trigger).map(i => {

            trigger.item(i).addEventListener('click', () => {
                openModal(trigger.item(i).dataset.modal)
            })
        })

    }

    if (modals) {

        Object.keys(modals).map(i => {

            modals.item(i).addEventListener('click', e => {
                const target = (e.target.className).toString()

                if (target === "modal-content")
                    return true
                else if (target === "modal")
                    closeModal(modals.item(i).dataset.modal)
            })
        })
    }

    function openModal(modal) {

        Object.keys(modals).map(i => {
            if (modals.item(i).dataset.modal === modal)
                modals.item(i).dataset.status = "show"
        })
    }

    function closeModal(modal) {

        Object.keys(modals).map(i => {
            if (modals.item(i).dataset.modal === modal)
                modals.item(i).dataset.status = "hidden"
        })
    }
})