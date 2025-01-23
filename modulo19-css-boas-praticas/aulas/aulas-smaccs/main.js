const accordions = document.querySelectorAll('.accordion')
for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function(e){
        e.target.parentNode.classList.toggle('accordion-is-open')


        /*
        if(e.target.parentNode.classList.contains('accordion-is-open')){
            e.target.parentNode.classList.remove('accordion-is-open')
        }else{
            e.target.parentNode.classList.add('accordion-is-open')
        }
        */
        
    })
    
}