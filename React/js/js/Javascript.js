const carrito = ['Josue ','Y' , 'Zhonyu']

console.log(carrito);

const app = document.querySelector('#app');

let html = '';
carrito.forEach(producto => {
    html += `<li>${producto}</li>`;
}) 
app.innerHTML = html;