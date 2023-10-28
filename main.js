//change navbar style on scrolling


const fqas = document.querySelectorAll('.fqa') ;
    
fqas.forEach(fqa => {
    fqa.addEventListener('click', () => {
        fqa.classList.toggle('open');


        const icon = fqa.querySelector('.fqa_icon i') ;
        if(icon.className === 'plus_icon'){
            icon.className = 'moin_icon'
        }
    })

})