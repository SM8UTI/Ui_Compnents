
const header = document.getElementById('header')
const navbar = document.getElementById('navbar-list')
const ham = document.getElementById('hammburger')

document.onclick = function(e){
    if(e.target.id !== 'header' && e.target.id !== 'navbar-list' && e.target.id !== 'hammburger'){
        toggle.classList.remove('active');
        navbar.classList.remove('active');
    };
}

ham.addEventListener("click",() => {
    navbar.classList.toggle('active')
    ham.classList.toggle('active')
})

