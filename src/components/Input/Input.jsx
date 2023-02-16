import React, { useContext, useState } from "react";
import { FormContext } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text" }) => {
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.

  // También, utilizaremos un estado local para manejar el estado del input.
  const {inputs, setInputs} = useContext(FormContext)
  const [ activeInput, setActiveInput ] = useState()

  const onChange = (e) => {
    // Aquí deberíamos actualizar el estado local del input.
    setActiveInput(e.target.value)
  };

  const onBlur = (e) => {
    e.preventDefault();

    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
    
    setInputs({ ...inputs, [e.target.id]: activeInput})

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
