let panels = document.querySelectorAll('.panel');
panels.forEach(e => {
    e.addEventListener('click', () => {
        e.classList.toggle('flex-grow');
       
    document.querySelector(`#${e.id} p:nth-child(2)`).classList.toggle('font-grow');
   
    setTimeout(function() {
        document.querySelector(`#${e.id} p:nth-child(1)`).classList.toggle('up');
        document.querySelector(`#${e.id} p:nth-child(3)`).classList.toggle('down');
    }, 200)
   
   

    
    
    })
})