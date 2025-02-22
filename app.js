// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []

const containerListaAmigos = document.getElementById("listaAmigos")

function agregarAmigo() {
  let nuevoAmigo = document.getElementById("amigo").value.trim();
  if (nuevoAmigo === '') return;

  listaAmigos.push(nuevoAmigo)

  const li = document.createElement("li")
  li.textContent = nuevoAmigo

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "X";
  btnEliminar.classList.add("delete-btn");
  btnEliminar.onclick = () => {
    containerListaAmigos.removeChild(li);
    listaAmigos = listaAmigos.filter(amigo => amigo != nuevoAmigo)
    console.log(listaAmigos);
  }

  containerListaAmigos.appendChild(li)

  li.appendChild(btnEliminar)

  document.getElementById("amigo").value = ""
  document.getElementById("amigo").focus();
  
  console.log(listaAmigos);
}


document.querySelector('#amigo').addEventListener('keydown', e => e.key === 'Enter' ? agregarAmigo() : '')