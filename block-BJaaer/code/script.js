/*Selecting Form element*/
let form=document.querySelector('form');

/*Add event Listner to form*/
form.addEventListener('submit',handleForm);

/*Object to store Form Data*/
let userData={};

let root=document.querySelector('div');




function handleForm(event)
{
    event.preventDefault();
    userData.name=event.target.name.value;
    userData.email=event.target.email.value;
    userData.love=event.target.gender.value;
    userData.color=event.target.color.value;
    userData.rating=event.target.range.value;
    let genre=event.target.drone;
    for(let i=0;i<genre.length;i++)
    {
        if(genre[i].checked===true)
        {
            userData.genre=genre[i].value;
        }
    }
    form.style.display="none";
    console.log(userData);
}


