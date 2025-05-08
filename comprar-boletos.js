document.addEventListener("DOMContentLoaded", function() {
    const selectFecha = document.getElementById("fecha");
    const hoy = new Date();
  
    for (let i = 0; i <= 7; i++) {
      const fecha = new Date(hoy);
      fecha.setDate(hoy.getDate() + i);
  
      const fechaISO = fecha.toISOString().split('T')[0]; // YYYY-MM-DD
      const fechaLegible = fecha.toLocaleDateString('es-MX', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
      }); // Ej: "jueves, 9 de mayo"
  
      const option = document.createElement("option");
      option.value = fechaISO;
      option.textContent = fechaLegible.charAt(0).toUpperCase() + fechaLegible.slice(1);
      selectFecha.appendChild(option);
    }
  });
  