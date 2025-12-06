function changeNewColor() {
    const color_container = document.getElementById("button")

    new_circle.addEventListener("mouseover", () => {
        new_circle.style.backgroundColor = "red"
    })

    new_circle.addEventListener("mouseout", () => {
        new_circle.style.backgroundColor = "blue"
    })

    circle_container.appendChild(new_circle)
}