const container = document.querySelector('.container');
const gridHeight = 800;
gridGenerator(16);

function gridGenerator(dimension){
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }

    for(let i = 0; i < dimension; ++i){
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let j = 0; j < dimension; ++j){
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.height = `${gridHeight/dimension}px`;
            box.style.width = `${gridHeight/dimension}px`;
            box.addEventListener('mouseover', () => {
                box.style.backgroundColor = 'grey' 
            })
            row.appendChild(box);
        }
    }
}


const btn = document.querySelector('button');


btn.addEventListener('click', () => {
    let input = prompt("How many squares per side of the new grid? (1-100)", 16);
    input = (input>100) ? 100 : input;
    gridGenerator(input);
})
