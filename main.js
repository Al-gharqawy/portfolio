// ----------- code toggle -----------//
const toggle = document.getElementById('toggle')
const action = document.getElementById('navbar')


toggle.addEventListener('click', () => {

    action.classList.toggle('activ')


})

action.addEventListener('click', () => {

    action.classList.remove('activ')

})





const topButton = document.getElementById("topButton");



function scrollFunction() {
    if (window.scrollY > 200) {
        topButton.style.display = "block"; 
    } else {
        topButton.style.display = "none"; 
    }
}

window.addEventListener("scroll", scrollFunction);

topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});

