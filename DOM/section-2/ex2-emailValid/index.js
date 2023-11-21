const form = document.getElementById("form");
const error = document.getElementById("error")
error.style.color = "red";


form.addEventListener("submit",function(event){
    event.preventDefault();

    const emailInput = document.getElementById("email").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailRegex.test(emailInput)){
        error.textContent = "";
    }else{
        error.textContent = "you entered a wrong email format please enter a valid email "
    }

})