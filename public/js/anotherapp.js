const express = require("express");
const {text} = require("express");
const contactForm = document.querySelector('.p-5');
const app = express()

let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let message = document.getElementById('message')



contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData ={
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type','application/json' );
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'Success'){
            var alert = 'Email sent'
            name = 'Email sent'
            fname.value = '';
            lname.value = '';
            email.value = '';
            phone.value = '';
            message.value = '';
        }else{
             alert = 'Something went wrong'

        }
        console.log(alert)
    }
    xhr.send(JSON.stringify(formData))
})