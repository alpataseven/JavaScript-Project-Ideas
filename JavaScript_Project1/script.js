const panel = document.querySelectorAll(".panel"); //Birden fazla panel class'ı olduğu için querySelectorAll kullandık.

panel.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActive();
        panel.classList.add("active");
    });
})

function removeActive() {
    panel.forEach(panel => {
        panel.classList.remove("active");
    })
}