const form = document.querySelector('.formx'); //create a reference to the form

const button = document.querySelector('button');

const regEx = /^(?=.*[A-Z])[a-zA-Z0-9]{5,}$/;  //(?=.*[A-Z])for at least one UC letter

const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


form.username.addEventListener('keyup', e =>{ //verify that each key entry produces a valid entry 
    
    if(regEx.test(e.target.value)){
        form.username.setAttribute('class', 'success'); //the username input is targeted using the 'name' attribute
    }
    else{
        form.username.setAttribute('class', 'error');
    }
})

button.addEventListener('click', ()=>{
    
    checkNull();
    checkEmail();
});

function  checkNull(){
    if(form.username.value==='' || form.email.value==='' || form.pwd.value===''){
        alert('You Have and Empty Field')
    }
}

function checkEmail(){
if (emailPattern.test(form.email.value)){
        return true;
    }
    else{
        alert('Email Field invalid!')
    }
}







