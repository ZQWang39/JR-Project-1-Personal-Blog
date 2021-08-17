
export const formSubmit = ()=>{
    
const contactForm = document.querySelector('.contact__form');
let name = document.getElementById('name');
let email= document.getElementById('email');
let phone = document.getElementById('phone');
let text = document.getElementById('text');


 contactForm.addEventListener('submit',(e)=>{
     e.preventDefault();
     let formData={
        name : name.value,
        email:email.value,
        phone : phone.value,
        text : text.value
    }
    //console.log(formData);
    let xhr = new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = ()=>{
        console.log(xhr.responseText);
        if(xhr.responseText =='Success'){
            alert('Email sent successfully');
            name.value='';
            email.value='';
            phone.value='';
            text.value='';
        }else{
            alert('Email sent error');
        }
    }
    xhr.send(JSON.stringify(formData))
 })
}


