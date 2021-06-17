const nombre = 'Josue';

const trabajo = 'Desarrollador ';

console.log('Nombre:'+ nombre + 'Trabajo' + trabajo);


const app = document.querySelector('#app')
let html ='<ul>' +
      '<li> Nombre' + nombre  +  '</li>' +
        '<li> Trabajo' + trabajo + '</li>' +
         '</ul>';  
let html = `
<h1>HoLi Feos </h1>
<button onclick="Josue()">Hola</button>


`      
function Josue(){
  alert("HOLA MUNDO ");
}


app.innerHTML = html;           



