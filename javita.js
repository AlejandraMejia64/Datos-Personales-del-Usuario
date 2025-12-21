let nombre = prompt("Ingrese su nombre completo:");
let FechaNacimiento = new Date(prompt("Ingrese su fecha de nacimiento (YYYY-MM-DD):"));
let tipodeSangre = prompt("Ingrese su tipo de sangre:");
let pesokilos = Number(prompt("Ingrese su peso en kilos:"));
let alturapulgadas = Number(prompt("Ingrese su altura en pulgadas:"));
let genero = prompt("Ingrese su género (Masculino/Femenino):");

const pulgadas_a_metros = 0.0254;
const kilos_a_libras = 2.20462;

let alturametros = alturapulgadas * pulgadas_a_metros;
let pesolibras = pesokilos * kilos_a_libras;

let hoy = new Date();
let edad = hoy.getFullYear() - FechaNacimiento.getFullYear();

alert("Bienvenido/a " + nombre + ". Agradezco su colaboración con los datos.");

document.write("<div class='card'>");
document.write("<h1 class='titulo'>Datos Personales del Usuario</h1>");

// NOMBRE
document.write("<div class='dato'><h2>Nombre</h2><p>" + nombre + "</p></div>");

// EDAD
document.write("<div class='dato'><h2>Edad</h2><p>" + edad + " años</p></div>");

// GÉNERO
document.write("<div class='dato'><h2>Género</h2>");
if (genero === "Masculino" || genero === "masculino") {
    document.write("<p>Masculino ♂</p>");
} else if (genero === "Femenino" || genero === "femenino") {
    document.write("<p>Femenino ♀</p>");
} else {
    document.write("<p>No mencionó género Válido</p>");
}
document.write("</div>");

// TIPO DE SANGRE
document.write("<div class='dato'><h2>Tipo de Sangre</h2><p>" + tipodeSangre + "</p></div>");

// PESO
document.write("<div class='dato'><h2>Peso</h2><p>" + pesolibras.toFixed(2) + " libras</p></div>");

// ALTURA
document.write("<div class='dato'><h2>Altura</h2><p>" + alturametros.toFixed(2) + " metros</p></div>");

document.write("</div>");
