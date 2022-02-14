let youCount=0;
let compCount=0;

youScore=document.querySelector('.you-score');
compScore=document.querySelector('.comp-score');




let output=document.querySelector('.output');
console.log(output);

let btnCollection=document.querySelectorAll('.btn');
btnCollection.forEach((btn)=>{
    btn.addEventListener('click',handler);
});


btnCollectionComp=document.querySelectorAll('.btn-comp');


function handler(event)
{
    let btn=event.target;
    let randomNumber=generateRandomNumber(0,3);
    let compBtn=btnCollectionComp[randomNumber];
    console.log(btn);
    console.log(compBtn);
    let result=play(btn,compBtn);
    if(result==1)
    {
        
        youCount+=1;
        youScore.innerText="You-"+youCount;
        output.innerText="You Won!"


    }
    if(result==-1)
    {
        compCount+=1;
        compScore.innerText="Computer-"+compCount;
        output.innerText="You Lost!";
    }
    if(result==0)
    {
        output.innerText="It's a tie.";
    }

}

function generateRandomNumber(min,max)
{
    return Math.floor(Math.random()*(max-min)+min);
}

function play(you,comp)
{
    let result;
    let youCode=you.dataset.code;
    let compCode=comp.dataset.code;
    console.log(youCode,compCode);
    switch(true)
    {
        case(youCode==='UR' && compCode==='CR'):
            {
                result=0;
                break;
            }
        case(youCode==='UR' && compCode==='CP'):
            {
                result= -1;
                break;
            }
        case(youCode==='UR' && compCode==='CS'):
            {
                result= 1;
                break;
            }
        case(youCode==='UP' && compCode==='CR'):
            {
                result= 1;
                break;
            }
            case(youCode==='UP' && compCode==='CP'):
            {
                result= 0;
                break;
            }
            case(youCode==='UP' && compCode==='CS'):
            {
                result= -1;
                break;
            }
            case(youCode==='US' && compCode==='CR'):
            {
                result= -1;
                break;
            }
            case(youCode==='US' && compCode==='CP'):
            {
                result= 1;
                break;
            }
            case(youCode==='US' && compCode==='CS'):
            {
                result= 0;
                break;
            }
    }
    return result;
}