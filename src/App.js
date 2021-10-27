import React, { Fragment, useState, useEffect } from "react";
import Swal from 'sweetalert2';
import Header from './components/Header';
import Formaulario from './components/Formulario';
import ListadoResultados from './components/ListadoResultados'

function App() {
  //state de la app
  const [busqueda, guardarBusqueda] = useState('');
  const [resultados, guardarResultados] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === '') return;

      Swal.fire({
        html: '<h5>Cargando...</h5>',
        showConfirmButton: false
      });

      const url = `https://rickandmortyapi.com/api/character/?name=${busqueda}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      //console.log(resultado);
      if (resultado.error) {
        Swal.fire({
          title: 'Error!',
          text: 'No se encontraron resultados.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
      } else {
        Swal.close();
        guardarResultados(resultado.results);
      }
    }
    consultarApi();
  }, [busqueda])

  return (
    <Fragment>
      <Header
        titulo='Buscador de Personajes Rick and Morty'
      />
      <Formaulario
        guardarBusqueda={guardarBusqueda}
      />

      <ListadoResultados
        resultados={resultados}
      />
    </Fragment>
  );
}

export default App;