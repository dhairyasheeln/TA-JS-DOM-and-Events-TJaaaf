function generateRandomNumber(min,max)
{
    return Math.floor(Math.random()*(max - min) + min);
}

function handler(e){
    e.target.innerText=generateRandomNumber(1,13);
    setTimeout(function setBlank(){
        e.target.innerText=" ";
    },5000);
}

let root=document.querySelector('.container');


let boxOne=root.children[0];
let boxesOne=boxOne.querySelectorAll('li');

/*multiple event listeners*/

boxesOne.forEach(function(box){
    box.addEventListener('click',function(event)
    {
        handler(event);
    });
});


let boxTwo=root.children[1];
let boxesTwo=boxTwo.querySelectorAll('li');

/* event delegation*/
boxTwo.addEventListener('click',function(event){
    handler(event);
});



