let listaAmigos = []

const containerListaAmigos = document.getElementById("listaAmigos");
const inputAmigo = document.getElementById("amigo");
const containerAmigoSorteado = document.getElementById("resultado")
const botonSortearAmigo = document.getElementById("botonSorteo")



function renderizarListaAmigos() {
  containerListaAmigos.innerHTML = "";

  listaAmigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "X";
    btnEliminar.classList.add("delete-btn");
    btnEliminar.onclick = () => eliminarAmigo(index);

    li.appendChild(btnEliminar);
    containerListaAmigos.appendChild(li);
  })
}

function agregarAmigo() {
  let nuevoAmigo = inputAmigo.value.trim();
  if (nuevoAmigo === '') return;

  nuevoAmigo = nuevoAmigo.charAt(0).toUpperCase() + nuevoAmigo.slice(1).toLowerCase();
  
  listaAmigos.push(nuevoAmigo);

  console.log(listaAmigos);
  
  if (listaAmigos.length >= 1) {
    habilitarBoton('botonSorteo');
    document.getElementById('botonSorteo').classList.replace('button-draw-disabled', 'button-draw')
  }

  renderizarListaAmigos();
  
  inputAmigo.value = ""
  inputAmigo.focus();
}

function eliminarAmigo(index) {
  listaAmigos.splice(index, 1);
  renderizarListaAmigos();
}

function limpiarLista() {
  listaAmigos = [];
  renderizarListaAmigos();
  document.getElementById('resultado').innerHTML = "";
}

function sortearAmigo() {
  if (listaAmigos.length === 1) {
    deshabilitarBoton('botonSorteo')
    document.getElementById('botonSorteo').classList.replace('button-draw', 'button-draw-disabled')
  }

  const randomIndex = Math.floor((Math.random() * listaAmigos.length-1) + 1)
  
  return randomIndex;
}

function renderizarAmigoSorteado() {
  containerAmigoSorteado.innerHTML = "";

  const amigoSorteado = listaAmigos.splice(sortearAmigo(), 1)[0]

  const span = document.createElement("span");
  const spanAmigo = document.createElement("span")

  spanAmigo.textContent = amigoSorteado
  spanAmigo.classList.add("friend-result-list")

  span.textContent = `El amigo secreto es:`;

  span.classList.add("text-result-list");

  containerAmigoSorteado.appendChild(span);
  containerAmigoSorteado.appendChild(spanAmigo);

  renderizarListaAmigos();
}

function habilitarBoton(id) {
  document.getElementById(id).removeAttribute('disabled')
  document.getElementById(id).classList.replace('button-draw-disabled', 'button-draw')
}

function deshabilitarBoton(id) {
  document.getElementById(id).setAttribute('disabled', true)
}

inputAmigo.addEventListener('keydown', e => {
  if (e.key === 'Enter') agregarAmigo();
});