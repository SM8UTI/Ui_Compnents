document.addEventListener("mousemove",(e)=>{

    const object = document.querySelectorAll('.object')

    object.forEach(move => {
        const speed = move.getAttribute('data-speed')
    
        const x = (window.innerWidth - e.pageX*speed)/150
        const y = (window.innerHeight - e.pageY*speed)/150
    
        move.style.translate = `${x}px ${y}px`
    });
})

