console.log('hi')
const container = document.querySelector("#page div")

let size = 16;
const div = document.createElement('div');
        div.innerText = "test";
        div.style.width = 256/size;
        div.style.height = 256/size;
        
for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
        container.appendChild(div);
        console.log('hi')
    }
}
