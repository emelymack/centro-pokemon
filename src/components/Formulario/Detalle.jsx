import React, { useContext } from "react";
import { useQueryClient, useMutation } from "react-query";
import { FormContext } from "../../context/ContextoFormulario";
import {sendForm} from '../../hooks/useAPI'
import { Loading } from "../Loading";

const Detalle = ({formRef}) => {
  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.
  const [ inputs, dispatch ] = useContext(FormContext)
  const { mutate, isLoading, data, reset, isError,status } = useMutation(sendForm)

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(inputs)
    mutate(inputs,
      {
        onSuccess: () => {
          alert("Formulario enviado :)")
          formRef.current.reset(); // para que se reseteen los campos del form
          reset(); // para que se reseteen los datos recibidos por el useMutation
          dispatch({type: "ENVIADO"})
        },
        onError: () => {
        alert("No hemos podido enviar el formulario, por favor intente nuevamente")
      }
    })
    }


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
          <p>Especie: {inputs.pokemon?.especie}</p>
          <p>Altura: {inputs.pokemon?.altura}</p>
          <p>Edad: {inputs.pokemon?.edad}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        type="submit"
        onClick={handleSubmit}
      >
        Enviar Solicitud
      </button>
      {isLoading && <Loading text={'Enviando formulario...'} />}
    </div>
  );
};

export default Detalle;
