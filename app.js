// Header
const header = document.querySelector("header")
header.innerHTML = `<h1>Jazmín Castelo</h1>`

// Footer
const footer = document.querySelector("footer")
footer.innerHTML = `<p>Página creada por Jazmín Isabel Castelo</p>`

// Modales
// JS
function openModal() {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
// REACT
function openModalR() {
    document.getElementById('myModalR').style.display = 'block';
    document.getElementById('overlayR').style.display = 'block';
}

function closeModalR() {
    document.getElementById('myModalR').style.display = 'none';
    document.getElementById('overlayR').style.display = 'none';
}
// Desarrollo
function openModalDesarrollo() {
    document.getElementById('myModalDesarrollo').style.display = 'block';
    document.getElementById('overlayDesarrollo').style.display = 'block';
}

function closeModalDesarrollo() {
    document.getElementById('myModalDesarrollo').style.display = 'none';
    document.getElementById('overlayDesarrollo').style.display = 'none';
}
// CM
function openModalCM() {
    document.getElementById('myModalCM').style.display = 'block';
    document.getElementById('overlayCM').style.display = 'block';
}

function closeModalCM() {
    document.getElementById('myModalCM').style.display = 'none';
    document.getElementById('overlayCM').style.display = 'none';
}
// Portugués
function openModalP() {
    document.getElementById('myModalP').style.display = 'block';
    document.getElementById('overlayP').style.display = 'block';
}

function closeModalP() {
    document.getElementById('myModalP').style.display = 'none';
    document.getElementById('overlayP').style.display = 'none';
}
// Ingles
function openModalI() {
    document.getElementById('myModalI').style.display = 'block';
    document.getElementById('overlayI').style.display = 'block';
}

function closeModalI() {
    document.getElementById('myModalI').style.display = 'none';
    document.getElementById('overlayI').style.display = 'none';
}