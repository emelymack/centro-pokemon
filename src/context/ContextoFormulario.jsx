// Aqui debemos crear nuestro contexto y nuestro provider.

import { createContext, useReducer, useState } from "react";

export const FormContext = createContext({});

export const initialState = {
  nombre: '',
  apellido: '',
  email: '',
  nombrePokemon: '',
  tipoPokemon: '',
  elemento: '',
  altura: '',
  edad: ''
}

export const inputsReducer = (state, action) => {
  switch (action.type) {
    case "ACTUALIZAR_ENTRENADOR" : {
      return {
        ...state,
        nombre: action.payload.nombre,
        apellido: action.payload.apellido,
        email: action.payload.email,
      };
    }
    case "ACTUALIZAR_POKEMON" : {
      return {
        ...state,
        nombrePokemon: action.payload.nombrePokemon,
        tipoPokemon: action.payload.tipoPokemon,
        elemento: action.payload.elemento,
        altura: action.payload.altura,
        edad: action.payload.edad
      };
    }
    default: 
      return initialState;
  }
}

export const FormProvider = ({children}) => {
  const [ inputs, dispatch ] = useReducer(inputsReducer, initialState)

  return (
    <FormContext.Provider value={[ inputs, dispatch ]}>
      {children}
    </FormContext.Provider>
  )
}