let input=document.querySelector('input[type="text"]');
let root=document.querySelector('ul');

let active=document.querySelector('.active');
active.addEventListener('click',handleActive);

let completed=document.querySelector('.completed');
completed.addEventListener('click',handleCompleted);

let all=document.querySelector('.all');
all.addEventListener('click',handleAll);

let clear=document.querySelector('.clearComplete');
clear.addEventListener('click',handleClear);

input.addEventListener('keyup',handleTodo);

let allTodo=JSON.parse(localStorage.getItem('todos')) || [];

function handleTodo(event)
{
    if(event.keyCode===18 && event.target.value!=="")
    {
        let todo={};
        todo["name"]=event.target.value;
        todo["isDone"]=false;
        allTodo.push(todo);
        event.target.value="";
        createUI(allTodo,root);
    }
    localStorage.setItem("todos",JSON.stringify(allTodo));
    
}

function createUI(data,rootElm)
{
    root.innerHTML="";
    data.forEach((todoEle,index)=>{
        let li=document.createElement('li');

        let checkbox=document.createElement('input');
        checkbox.type="checkbox";
        checkbox.checked=todoEle.isDone;
        checkbox.setAttribute('data-id',index);
        checkbox.addEventListener('click',handleToggle);

        let p=document.createElement('p');
        p.innerText=todoEle.name;

        let span=document.createElement('span');
        span.innerText="X";
        span.setAttribute('data-id',index);
        span.addEventListener('click',handleDelete);

        li.append(checkbox,p,span);
        rootElm.append(li);

    })
}


function handleDelete(event)
{
    allTodo.splice(event.target.dataset.id,1);  
    localStorage.setItem("todos",JSON.stringify(allTodo));
    createUI(allTodo,root); 
    
}

function handleToggle(event)
{
    let id=event.target.dataset.id;
    allTodo[id].isDone=!allTodo[id].isDone;
    localStorage.setItem("todos",JSON.stringify(allTodo));
    createUI(allTodo,root);
}



function handleAll(event)
{
    event.preventDefault();
    createUI(allTodo,root);
}

function handleActive(event)
{
    event.preventDefault();
    let activeAllTodo=[];
    allTodo.forEach(todoElm=>{
        if(todoElm.isDone===false)
        {
            activeAllTodo.push(todoElm);
        }

    });
    createUI(activeAllTodo,root);
}

function handleCompleted(event)
{
    event.preventDefault();
    let completedAllTodo=[];
    allTodo.forEach(todoElm=>{
        if(todoElm.isDone===true)
        {
            completedAllTodo.push(todoElm);
        }

    });
    createUI(completedAllTodo,root);
}

// function handleClear(event)
// {
//     let indexArr=[];
//     event.preventDefault();
//     allTodo.forEach((todoElm,index)=>{
//         if(todoElm.isDone===true)
//         {
//             indexArr.push(index);  
//         }
//     });
//     console.log(indexArr);
//     console.log(allTodo);
//     indexArr.forEach(ele=>{
//         allTodo.splice(ele,1);
//     });
//     console.log(allTodo);
// }
