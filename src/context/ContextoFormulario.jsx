// Aqui debemos crear nuestro contexto y nuestro provider.

import { createContext, useReducer, useState } from "react";

export const FormContext = createContext({});

export const initialState = {
  entrenador: {
    nombre: '',
    apellido: '',
    email: '',
  },
  pokemon: {
    nombrePokemon: '',
    tipoPokemon: '',
    elemento: '',
    altura: '',
    edad: ''
  }
}

/**
 * En esta función actualizamos los estados que contienen los valores de los inputs
 * @param {*} state 
 * @param {*} action 
 * @returns {Object}
 */
export const inputsReducer = (state, action) => {
  switch (action.type) {
    case "ACTUALIZAR_ENTRENADOR" : {
      return {
        ...state,
        entrenador: { 
          ...state.entrenador,
          ...action.payload
        }
      };
    }
    case "ACTUALIZAR_POKEMON" : {
      return {
        ...state,
        pokemon: {
          ...state.pokemon,
          ...action.payload
        }
      };
    }
    case "ENVIADO": 
      return initialState;
    
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