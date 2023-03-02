// Aqui debemos crear nuestro contexto y nuestro provider.

import { createContext, useReducer, useState } from "react";
import PropTypes from 'prop-types';

export const FormContext = createContext({});
/**
 * @typedef {object} initialState
 * @property { entrenador | undefined } entrenador
 * @property { pokemon | undefined } pokemon
 */
/**
 * @typedef {object} entrenador
 * @property {string} nombre
 * @property {string} apellido
 * @property {string} email
 */
/**
 * @typedef {object} pokemon
 * @property {string} nombrePokemon
 * @property {string} tipoPokemon
 * @property {string} elemento
 * @property {number} altura
 * @property {number} edad
 */
/**
 * @typedef {object} action
 * @property {string} type
 * @property {object} payload
 */

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
 * @description En esta función actualizamos los estados de entrenador y pokemon
 * @param {initialState} state recibe el estado inicial
 * @param {action} action recibe la acción a realizar para modificar el estado
 * @returns {initialState}
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

FormProvider.propTypes = {
  children: PropTypes.element.isRequired, // .element especifica que únicamente un hijo se pase al componente
}