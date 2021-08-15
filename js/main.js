import {navSlide} from './nav-slide.js'
import {displayJob} from './display-job.js'


navSlide();
displayJob();


const contactForm = document.querySelector('.contact__form');
let name = document.getElementById('name');
let button = document.querySelector('.button');
console.log(button)
console.log(name)
 contactForm.addEventListener('submit',(e)=>{
     e.preventDefault();
    console.log(name.value)
 })