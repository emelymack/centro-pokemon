import React, { useContext } from "react";
import { FormContext } from "../../context/ContextoFormulario";

const Detalle = () => {
  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.
  const [inputs, ] = useContext(FormContext)

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {inputs.nombre}</p>
          <p>Apellido: {inputs.apellido}</p>
          <p>Email: {inputs.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {inputs.nombrePokemon}</p>
          <p>Tipo: {inputs.tipoPokemon}</p>
          <p>Elemento: {inputs.elemento}</p>
          <p>Altura: {inputs.altura}</p>
          <p>Edad: {inputs.edad}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => alert("Solicitud enviada :)")}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
