const contactForm = document.querySelector('.contact-from');

let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let newFormData = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        phone: phone.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () {
        console.log(xhr.responseText);
        if (xhr.responseText === 'success') {
            fname.value = '';
            lname.value = '';
            email.value = '';
            phone.value = '';
            message.value = '';
        } else {
            console.log('fail')
        }
    }
    try {
        xhr.send(JSON.stringify(newFormData));
    } catch (e) {
        console.log(e);
    }

})