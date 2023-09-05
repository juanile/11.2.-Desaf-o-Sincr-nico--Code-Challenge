document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('registroForm');

  formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtiene los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    // Crea un objeto JSON con los datos del formulario
    const data = {
      nombre: nombre,
      apellido: apellido,
      fechaNacimiento: fechaNacimiento
    };

    // Realiza la solicitud POST a la URL con los datos en formato JSON
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud HTTP');
        }
        return response.json();
      })
      .then(result => {
        console.log('Respuesta del servidor:', result);
        // Realiza acciones adicionales aquí después de recibir la respuesta
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
      });
  });
});

