const open = document.querySelector(".signup_button"),
    close = document.getElementById("close"),
    submit = document.querySelector(".submit"),
    form = document.querySelector(".signup_form"),
    nameInput = document.getElementById("name"),
    emailInput = document.getElementById("email"),
    Err = document.querySelector(".error");


open.addEventListener("click", ()=> {
    form.style.display= "flex";
})

close.addEventListener("click", ()=> {
    form.style.display= "none";
})

submit.addEventListener("click", ()=> {
    if(nameInput.value.length < 10) {
        Err.innerHTML = "Your Name should be minimum 10 charecter!";
        Err.style.display= "block";
        Err.style.transition= ".7s";
        Err.style.right= "0";
        setTimeout(function(){Err.style.display="none";}, 5000)
        nameInput.style.borderColor= "red";
    }else {
        nameInput.style.borderColor= "green";
    }
})