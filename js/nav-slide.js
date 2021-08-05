export const navSlide = ()=>{ 
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    //console.log(navLinks)
    const addNavActive = ()=>{
        //toggle nav
        nav.classList.toggle('nav-active');
        //animation links
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
            link.style.animation = `navLinkFade .3s ease forwards ${index/5+0.3}s`
            }
    
        })
        burger.classList.toggle('toggle');
        }
    burger.addEventListener('click',addNavActive);
    
   
    
    }
    