document.getElementById("habitForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const datos = {
    agua: document.getElementById("agua").value,
    sueno: document.getElementById("sueno").value,
    ejercicio: document.getElementById("ejercicio").value,
    estado: document.getElementById("estado").value,
    fecha: new Date().toLocaleString()
  };

  let historial = JSON.parse(localStorage.getItem("habitos")) || [];
  historial.push(datos);
  localStorage.setItem("habitos", JSON.stringify(historial));

  alert("¡Datos guardados!");
  this.reset();
});

