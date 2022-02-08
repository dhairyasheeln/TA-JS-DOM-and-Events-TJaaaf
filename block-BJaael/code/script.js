let parentBox=document.querySelector('.boxes');


for(let i=0;i<500;i++)
{
    let box=document.createElement('div');
    box.classList.add('box');
    box.innerText=generateRandomnNumber();
    parentBox.append(box);
}



parentBox.addEventListener('mousemove',handler);

function handler()
{
    let boxArray=Array.from(document.querySelectorAll('.box'));
    boxArray.forEach(function(ele){
        ele.innerText=generateRandomnNumber();
        ele.style.backgroundColor=generateRandomColor();
    });
    
}


function generateRandomnNumber()
{
    let random=Math.floor(Math.random()*500);
    return random;
}

function generateRandomColor()
{
    let color="#";
    let hex=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    for(let i=0;i<6;i++)
    {
        let randomNumber=Math.floor(Math.random()*16);
        color=color+hex[randomNumber];
    }
    return color;
}



