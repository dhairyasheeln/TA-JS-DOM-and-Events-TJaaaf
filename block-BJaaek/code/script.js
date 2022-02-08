/*Selecting First Box and adding event Listner*/

let firstBox=document.querySelector('.first');
firstBox.addEventListener('click',changeColorClick);

/*Selecting Second Box and adding event Listner*/

let secondBox=document.querySelector('.second');
secondBox.addEventListener('mousemove',changeColorMouse);

/*Array with Random colors*/

let colors=['#99ccff','#ff5050','#ccff99','#ffff66','#cc6699','#996633','#339966'];

let i=0;

/*Genrate random Color*/

function generateRandom()
{
    let hex=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

    let color="#";
    for(let i=0;i<6;i++)
    {
        let random=Math.floor(Math.random()*16);
        color=color+hex[random];
    }
    return color;
}

/*Event Handler for click event*/
function changeColorClick()
{
    firstBox.style.backgroundColor=generateRandom();
}

/*Event Handler for Mouse move event*/
function changeColorMouse()
{
        secondBox.style.backgroundColor=generateRandom();
}