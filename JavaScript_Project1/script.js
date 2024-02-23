const panels = document.querySelectorAll(".panel"); //Birden fazla panel class'ı olduğu için querySelectorAll kullandık.

panels.forEach(panel => {
    panel.addEventListener("click", () => {

        removeActive();
        panel.classList.add("active");
    });
})

function removeActive(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}