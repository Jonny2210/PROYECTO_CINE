document.addEventListener("DOMContentLoaded", function () {
  // Cargar fechas
  const selectFecha = document.getElementById("fecha");
  const hoy = new Date();

  for (let i = 0; i <= 7; i++) {
    const fecha = new Date(hoy);
    fecha.setDate(hoy.getDate() + i);

    const fechaISO = fecha.toISOString().split("T")[0]; // YYYY-MM-DD
    const fechaLegible = fecha.toLocaleDateString("es-MX", {
      weekday: "long",
      day: "numeric",
      month: "long",
    }); // Ej: "jueves, 9 de mayo"

    const option = document.createElement("option");
    option.value = fechaISO;
    option.textContent =
      fechaLegible.charAt(0).toUpperCase() + fechaLegible.slice(1);
    selectFecha.appendChild(option);
  }

  // Mostrar imagen y título de la película seleccionada
  const urlParams = new URLSearchParams(window.location.search);
  const peliculaId = parseInt(urlParams.get("id"));

  if (peliculaId) {
    const pelicula = peliculas.find((p) => p.id === peliculaId);
    if (pelicula) {
      document.getElementById("pelicula-imagen").src = pelicula.imagen;
      document.getElementById("pelicula-titulo").textContent = pelicula.titulo;
    }
  }

   // Inicializar modales
  var modales = document.querySelectorAll('.modal');
  M.Modal.init(modales);
  
});

function continuarAButacas() {
  const cine = document.getElementById("select-cine").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("select-hora").value;
  const formato = document.getElementById("select-formato").value;
  const idioma = document.getElementById("select-idioma").value;

  if (!cine || !fecha || !hora || !formato || !idioma) {
    alert("Por favor, selecciona todos los campos antes de continuar.");
    return;
  }

  // Todo está seleccionado, ahora sí se redirige
  window.location.href = "asientosSelec.html";
}