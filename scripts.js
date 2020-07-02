// ORDER MODAL

document.querySelector(".order-modal").style.display = "none"

function orderModal() {
    document.querySelector(".order-modal").style.display = "block"
}

function closeModal() {
    document.querySelector(".order-modal").style.display = "none"
}

// TEAM SLIDER

let slidesAmount = 1
let slider = 0

function increase() {
    slider == slidesAmount ? slider = slidesAmount : slider += 1
    renderSlide(slider)
}

function decrease() {
    slider == 0 ? slider = 0 : slider -= 1
    renderSlide(slider)
}

function renderSlide(slideNumber) {
    if (slideNumber == 0) {
        document.getElementById('sliderZero').style.display = "flex"
        document.getElementById('sliderOne').style.display = "none"
    }
    if (slideNumber == 1) {
        document.getElementById('sliderZero').style.display = "none"
        document.getElementById('sliderOne').style.display = "flex"
    } else {
        // Do nothing
    }
}

renderSlide(slider)

// DOWNLOAD MORE WORKS
document.getElementById('row-2').style.display = "none"

function loadMore() {
    document.getElementById('row-2').style.display = "flex"
}

// WORKS MODAL 
document.querySelector(".works-modal").style.display = "none"

function openWorks() {
    document.querySelector(".works-modal").style.display = "block"
}

function closeWorks() {
    document.querySelector(".works-modal").style.display = "none"
}

// PROMO SECRET
document.getElementById('promo-after').style.display = "none"

function promoSecret() {
    document.querySelector(".promo-after").style.display = "block"
    document.querySelector(".promo-before").style.display = "none"
}
