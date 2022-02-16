let form=document.querySelector('form');
form.addEventListener('submit',handleSubmit);


function handleSubmit(event)
{
    let error="";

    event.preventDefault();
    let elements=event.target.elements;

    let username=elements.username;
    let name=elements.name;
    let email=elements.email;
    let phone=elements.phone;
    let pass=elements.pass;
    let confPass=elements.confPass;
    console.log(name,email,phone,pass);

    if(username.value.length<4)
    {
        error="Username can't be less than 4 characters";
        username.nextElementSibling.innerText=error;
    }
    
    if(isNumber(name.value.split('').some((ele)=>isNumber(ele)))==true){
        error="Name can't be numbers";
        name.nextElementSibling.innerText=error;
    }

    if(!email.value.includes('@'))
    {
        error="Email must contain the symbol @";
        email.nextElementSibling.innerText=error;
    }

    if(email.value.length<6)
    {
        error="Email must be at least 6 characters";
        email.nextElementSibling.innerText=error;
    }

    if(isNumber(phone.value.split('').every((ele)=>isNumber(ele)))==false)
    {
        error="Phone numbers can only be a number";
        phone.nextElementSibling.innerText=error;   
    }

    if(phone.value.length<6)
    {
        error="Length of phone number can't be less than 7";
        phone.nextElementSibling.innerText=error;
    }

    if(pass.value!==confPass.value)
    {
        error="Password and confirm password must be same.";
        confPass.nextElementSibling.innerText=error;
    }



    
}

function isNumber(num)
{
    if(Number(num)){
        return true;
    }
    else{
        return false;
    }
}





