import React, { useContext } from "react";
import { FormContext } from "../../context/ContextoFormulario";

const Detalle = () => {
  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.
  const [inputs, dispatch ] = useContext(FormContext)

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {inputs.entrenador?.nombre}</p>
          <p>Apellido: {inputs.entrenador?.apellido}</p>
          <p>Email: {inputs.entrenador?.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {inputs.pokemon?.nombrePokemon}</p>
          <p>Tipo: {inputs.pokemon?.tipoPokemon}</p>
          <p>Elemento: {inputs.pokemon?.elemento}</p>
          <p>Altura: {inputs.pokemon?.altura}</p>
          <p>Edad: {inputs.pokemon?.edad}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => {
          alert("Tu solicitud ha sido enviada :)")
          dispatch({type: "ENVIADO"})
        }}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
