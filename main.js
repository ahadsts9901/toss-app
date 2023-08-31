function dollar() {
    // console.log("dollar")
    let one = "dollar"
    let two
    let number = Math.floor(Math.random() * 2)
    let greet = document.getElementById("greet")
    let img = document.getElementById("image")
    let ins = document.getElementById("ins")
    if (number == 1) {
        two = "dollar"
    } else {
        two = "yen"
    }
    if (one === two) {
        console.log("you won")
        ins.classList.add("hidden")
        img.classList.remove("hidden")
        img.classList.remove("bi-currency-yen")
        img.classList.add("bi-currency-dollar")
        greet.classList.remove("hidden")
        greet.style.color = "#76ba1b"
        greet.innerText = "You Won The Toss"
    } else {
        console.log("you lose")
        ins.classList.add("hidden")
        img.classList.remove("hidden")
        img.classList.remove("hidden")
        img.classList.remove("bi-currency-dollar")
        img.classList.add("bi-currency-yen")
        greet.classList.remove("hidden")
        greet.style.color = "#de0a26"
        greet.innerText = "You Loss The Toss"
    }
    // console.log(number)
}

function yen() {
    // console.log("dollar")
    let one = "yen"
    let two
    let number = Math.floor(Math.random() * 2)
    let greet = document.getElementById("greet")
    let img = document.getElementById("image")
    let ins = document.getElementById("ins")
    if (number == 1) {
        two = "dollar"
    } else {
        two = "yen"
    }
    if (one === two) {
        console.log("you won")
        ins.classList.add("hidden")
        img.classList.remove("hidden")
        img.classList.remove("bi-currency-yen")
        img.classList.add("bi-currency-dollar")
        greet.classList.remove("hidden")
        greet.style.color = "#de0a26"
        greet.innerText = "You Loss The Toss"
    } else {
        console.log("you lose")
        ins.classList.add("hidden")
        img.classList.remove("hidden")
        img.classList.remove("hidden")
        img.classList.remove("bi-currency-dollar")
        img.classList.add("bi-currency-yen")
        greet.classList.remove("hidden")
        greet.style.color = "#76ba1b"
        greet.innerText = "You Won The Toss"
    }
    // console.log(number)
}