let screen=document.querySelector('.screen');
console.dir(screen);




let exp='';

let digit=document.querySelectorAll('.digit');
digit.forEach((dig)=>
{
    dig.addEventListener('click',(event)=>{
        let temp=event.target.innerText;
        exp+=temp;
        screen.innerText=exp;
    });
    
});

let operator=document.querySelectorAll('.operator');
operator.forEach((opr)=>
{
    opr.addEventListener('click',(event)=>{
        let temp=event.target.innerText;
        exp+=temp;
        screen.innerText=exp;
    });
    
});


let clear=document.querySelector('.clear');
clear.addEventListener('click',()=>{
    exp='';
    screen.innerText=exp;
});

let result=document.querySelector('.result');
result.addEventListener('click',()=>{
    exp=screen.innerText;
    console.log(exp);

});










