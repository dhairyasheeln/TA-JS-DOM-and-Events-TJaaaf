let form=document.querySelector('form');
form.addEventListener('submit',handleSubmit);

let error={};

function displayError(name)
    {
        form.elements[name].nextElementSibling.innerText=error[name];   
    }

function displaySuccess(name)
{
    form.elements[name].nextElementSibling.innerText="";
    error[name]="";
}



// function isNumber(num)
// {
//     if(Number(num)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

function handleSubmit(event)
{

    event.preventDefault();
    let elements=event.target.elements;

    let username=elements.username;
    let name=elements.name;
    let email=elements.email;
    let phone=elements.phone;
    let pass=elements.pass;
    let confPass=elements.confPass;

    if(username.value.length<4)
    {
        error.username="Username can't be less than 4 characters";
        displayError("username");
    }

    else{
        displaySuccess("username");
    }

    
    if(!isNaN(name.value)){
        error.name="Name can't be numbers";
        displayError("name"); 
    }
    else{
        displaySuccess("name");
    }


    if(!email.value.includes('@'))
    {
        error.email="Email must contain the symbol @";
        displayError("email");
    }

    else if(email.value.length<6)
    {
        error.email="Email must be at least 6 characters";
        displayError("email");
    }
    else{
        displaySuccess("email");
    }



    if(isNaN(phone.value))
    {
        error.phone="Phone numbers can only be a number";
        displayError("phone");  
    }
    else if(phone.value.length<7)
    {
        error.phone="Length of phone number can't be less than 7";
        displayError("phone"); 
    }
    else{
        displaySuccess("phone");
    }


    if(pass.value!==confPass.value)
    {
        error.pass="Password and confirm password must be same.";
        error.confPass="Password and confirm password must be same.";
        displayError("pass");
        displayError("confPass");
    }
    else{
        displaySuccess("confPass");
        displaySuccess("pass");
    }



    
}





