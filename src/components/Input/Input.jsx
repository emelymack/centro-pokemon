import React, { useContext, useState } from "react";
import { FormContext } from "../../context/ContextoFormulario";
import PropTypes from 'prop-types';

const Input = ({ name, label, type = "text", objType }) => {
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.

  // También, utilizaremos un estado local para manejar el estado del input.
  const [inputs, dispatch] = useContext(FormContext)
  const [ activeInput, setActiveInput ] = useState()

  /**
   * @description Función para actualizar el estado local del input
   * @param {InputEvent} e 
   */
  const onChange = (e) => {
    setActiveInput(e.target.value)
  };

  /**
   * @description Función que se ejecuta cuando el input pierde el foco, enviando el valor del input al contexto (i.e. actualizando el estado global) que es luego utilizado por el componente Detalle
   * @param {InputEvent} e 
   */
  const onBlur = (e) => {
    e.preventDefault();
    
    // TIP: Podemos utilizar el nombre de cada input para guardar los datos en el estado global usando una notación de { clave: valor }
    
    dispatch({
      type: objType === "entrenador" ? "ACTUALIZAR_ENTRENADOR" : "ACTUALIZAR_POKEMON",
      payload: { [e.target.id]: activeInput} 
    })
    
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  objType: PropTypes.string.isRequired // si es un input de ENTRENADOR o POKEMON
}