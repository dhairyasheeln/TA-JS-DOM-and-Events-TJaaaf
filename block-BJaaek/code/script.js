/*Selecting First Box and adding event Listner*/

let firstBox=document.querySelector('.first');
firstBox.addEventListener('click',changeColorClick);

/*Selecting Second Box and adding event Listner*/

let secondBox=document.querySelector('.second');
secondBox.addEventListener('mousemove',changeColorMouse);

/*Array with Random colors*/

let colors=['#99ccff','#ff5050','#ccff99','#ffff66','#cc6699','#996633','#339966'];

let i=0;


/*Event Handler for click event*/
function changeColorClick()
{
    if(i>=colors.length)
    {
        i=0;
    }
    firstBox.style.backgroundColor=colors[i];
    i++;

}

/*Event Handler for Mouse move event*/
function changeColorMouse()
{
    if(i>=colors.length)
    {
        i=0;
    }
    secondBox.style.backgroundColor=colors[i];
    i++;

}