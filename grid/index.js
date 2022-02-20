function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

let elements = document.getElementsByClassName('rd')

for (let i of elements) {
    i.style.backgroundColor = randomColor()
}