const form = document.querySelector('.formx');

const feedback = document.querySelector('.feedback')

const regEx = /^[a-zA-z0-9]{5,}$/;


form.username.addEventListener('keyup', e =>{

    if(regEx.test(e.target.value)){
        form.username.setAttribute('class', 'success')
        // feedback.textContent="success"
    }
    else{
        form.username.setAttribute('class', 'error')
        
    }
    // console.log(e.target.value, form.username.value)
})









