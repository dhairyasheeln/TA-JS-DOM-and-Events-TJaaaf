/*Selecting Form element*/
let form=document.querySelector('form');

/*Add event Listner to form*/
form.addEventListener('submit',handleForm);

/*Object to store Form Data*/
let userData={};

let root=document.querySelector('div');

let modal=document.querySelector('.divResult');

let btn=document.querySelector(".closeWindow");

function handleForm(event)
{
    event.preventDefault();
    userData.name=event.target.name.value;
    userData.email=event.target.email.value;
    userData.love=event.target.gender.value;
    userData.color=event.target.color.value;
    userData.rating=event.target.range.value;
    userData.genre=event.target.drone.value;
    userData.terms=event.target.terms.checked;
    

    form.classList.add('none');
    modal.classList.add('open');


    btn.addEventListener('click',(event)=>{
        modal.classList.remove('open');
        form.classList.remove('none');
    });
    displayData();
}


let modalInfo=document.querySelector(".modalInfo");
function displayData()
{   
    modalInfo.innerHTML="";

    let name=document.createElement('p');
    name.innerText=`Hello ${userData.name}`;

    let email=document.createElement('p');
    email.innerText=`Email: ${userData.email}`;

    let love=document.createElement('p');
    love.innerText=`You Love ${userData.love}`;

    let color=document.createElement('p');
    color.innerText=`Color: ${userData.color}`;

    let rating=document.createElement('p');
    rating.innerText=`Rating: ${userData.rating}`;

    let genre=document.createElement('p');
    genre.innerText=`Book Genre: ${userData.genre}`;

    let terms=document.createElement('p');
    terms.innerText=`${userData.terms===true ? "You  have accepted to terms" : "you have not accepted to terms"}`;

    modalInfo.append(name,email,love,color,rating,genre,terms);
}




