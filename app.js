const form = document.querySelector('.formx'); //create a reference to the form 
const button = document.querySelector('button');
const clrBtn = document.querySelector('.btnclear')
const regEx = /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{5,}$/;  //(?=.*[A-Z])for at least one UC letter
const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const error = document.querySelector('.errormsg');

form.username.addEventListener('keyup', e => { //verify that each key entry produces a valid entry 
    if (regEx.test(e.target.value)) {
        form.username.setAttribute('class', 'success'); //the username input is targeted using the 'name' attribute
    }
    else {
        form.username.setAttribute('class', 'error');
    }
});

form.email.addEventListener('keyup', e => { //verify that each key entry produces a valid
    if (emailPattern.test(e.target.value)) {
        form.email.setAttribute('class', 'success')
    }
    else {
        form.email.setAttribute('class', 'error');
    }
});

button.addEventListener('click', () => {
    checkPwd();
    checkNull();
    e.stopPropagation(); //prevents event bubbling
    checkEmail();
});

clrBtn.addEventListener('click', () => {
    Clear();
});

function checkNull() {
    if (form.username.value === '') {
        form.username.setAttribute('class', 'error');
        error.textContent = '* Username Required';
        error.style.color = 'red';
        error.style.fontWeight = 'bold';
    }
    else if (form.email.value === '') {
        form.email.setAttribute('class', 'error');
        error.textContent = '* Email Required';
        error.style.color = 'red';
        error.style.fontWeight = 'bold';
    }
    else if (form.pwd.value === '') {
        form.pwd.setAttribute('class', 'error');
        error.textContent = '* Password Required';
        error.style.color = 'red';
        error.style.fontWeight = 'bold';
    }
}

function checkEmail() {
    if (emailPattern.test(form.email.value)) {
        return true;
    }
    else {
        error.textContent = "Email Format Invalid";
    }
}

function Clear() {
    form.username.value = '';
    form.email.value = '';
    form.pwd.value = '';
    form.pwd2.value = '';
    error.textContent = '';
    form.username.setAttribute('class', 'neutral');//sets input border back to default
    form.email.setAttribute('class', 'neutral');
    form.pwd.setAttribute('class', 'neutral');
}

function checkPwd() {
    if (form.pwd.value === form.pwd2.value) {
        // return true;
        alert('passwords match')
    }
    else {
        error.textContent = '* Passwords Do Not Match!';
    }
}







