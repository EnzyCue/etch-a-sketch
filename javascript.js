const container = document.querySelector('.container');


function gridGenerator(dimension){
    for(let i = 0; i < dimension; ++i){
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let j = 0; j < dimension; ++j){
            const box = document.createElement('div');
            box.classList.add('box');
            box.addEventListener('mouseover', () => {
                box.style.backgroundColor = 'grey' 
            })
            row.appendChild(box);
        }
    }
}


cons btn = document.querySelector('button');


btn.addEventListener('click', () => {
    let input = prompt("How many squares per side of the new grid? :D");

})
