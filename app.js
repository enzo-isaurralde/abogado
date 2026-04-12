function enviarWhatsApp() {
  const nombre = document.getElementById('nombre').value;
  const mensaje = document.getElementById('mensaje').value;
  const telefonoAbogado = "5491151503610"; // Formato internacional para Argentina

  const url = `https://wa.me/${telefonoAbogado}?text=Hola,%20mi%20nombre%20es%20${nombre}.%20Consulta:%20${mensaje}`;
  
  window.open(url, '_blank');
}