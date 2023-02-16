// Aqui debemos crear nuestro contexto y nuestro provider.

import { createContext, useState } from "react";

export const FormContext = createContext({});

export const FormProvider = ({children}) => {
  const [ inputs, setInputs ] = useState({
    nombre: '',
    apellido: '',
    email: '',
    nombrePokemon: ''
  });

  return (
    <FormContext.Provider value={{inputs, setInputs}}>
      {children}
    </FormContext.Provider>
  )
}