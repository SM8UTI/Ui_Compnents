const navBtn = document.querySelector('.nav')
const ham = document.querySelector('.ham-menu')


ham.addEventListener("click",() =>{
    navBtn.classList.toggle('active')
    ham.classList.toggle('active')
})