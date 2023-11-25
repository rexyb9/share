const chords = ["a", "c", "d", "e", "f"]
const note = document.getElementById("note")

chords.forEach((chord) => {
    const button = document.createElement("button")
    button.textContent = chord
    button.addEventListener("click", () => {
        const audio = new Audio(`./assets/${chord}.wav`)
        audio.play()
    })
    note.appendChild(button)
})