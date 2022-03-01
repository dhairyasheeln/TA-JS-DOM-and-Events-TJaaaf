let form=document.querySelector('form');
let root=document.querySelector('.movieCollection');


form.addEventListener('submit',addMovie);




function addMovie(event)
{
    event.preventDefault();
    let elements=event.target.elements;

    let movie_name=elements.movie.value;

    let div=document.createElement('div');
    div.classList.add('movieBox');
    div.name=movie_name;

    let input=document.createElement('input');
    input.type="checkbox";
    input.classList.add("movieInput");
    input.name=movie_name;
    
    let label=document.createElement('label');
    label.htmlFor=movie_name;
    label.textContent=movie_name;
    label.classList.add('movieLabel')

    let btn=document.createElement('a');
    btn.innerText="X";
    btn.classList.add('movieCancel');
    btn.name=movie_name;
    btn.addEventListener('click',canMovie);

    div.append(input,label,btn);
    root.append(div);
}

function canMovie()
{
    let delMovie=event.target.parentElement;
    delMovie.remove();
}
