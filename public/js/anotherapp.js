const contactForm = document.querySelector('.p-5');

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
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type','application/json' );
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'Success'){
            alert('Email sent');
            fname.value = '';
            lname.value = '';
            email.value = '';
            phone.value = '';
            message.value = '';
        }else{
            alert('Something went wrong')
        }
    }
    xhr.send(JSON.stringify(formData))
})