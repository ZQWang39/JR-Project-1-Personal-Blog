export const displayJob = ()=>{
    const buttons = document.querySelectorAll('.resume__content__experience__button');
    
    buttons.forEach(button=>{
        button.addEventListener('click',()=>{
            button.nextElementSibling.classList.toggle("resume__content__experience__job-description--active");
            button.classList.toggle("resume__content__experience__button--active")
            });
        }) 
}


