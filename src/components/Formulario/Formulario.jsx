import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import entrenador from "../../assets/entrenador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";
import { Select } from "../Input/Select";
import { getSpecies, getTypes } from "../../hooks/useAPI";
import { InputModal } from "../Input/InputModal";
// En este componente tenemos nuestro formulario y dentro de él
// tenemos los componentes que necesitan consumir nuestro estado.
// Recuerda cual es el paso que debemos tomar para que nuestros
// componentes puedan consumir un estado global.

const Formulario = () => {
  const formRef = useRef(null)

  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokemon de Ash</h2>
        </div>
        <Link className="volver" to="/">
          Home
        </Link>
      </header>
      <div className="formulario-ingreso">
        <h3>Solicitud de atención</h3>
        <p>
          Por favor, completa el formulario para que podamos atender a tu
          pokémon
        </p>
        <div className="cuerpo-formulario">
          <form ref={formRef} className="inputs">
            <div>
              <p className="nombre-seccion">
                <img src={entrenador} alt="entrenador" />
                <span>ENTRENADOR</span>
              </p>
              <Input name="nombre" label="Nombre" objType="entrenador" />
              <Input name="apellido" label="Apellido" objType="entrenador" />
              <Input name="email" label="Email" type="email" objType="entrenador"  />
            </div>
            <div>
              <p className="nombre-seccion">
                <img src={pikachu} alt="pikachu" />
                <span>POKEMON</span>
              </p>
              <Input name="nombrePokemon" label="Nombre" objType="pokemon"  />
              <Select name="tipoPokemon" label="Tipo" objType="pokemon" queryKey={'types'} queryAction={getTypes} />
              <InputModal name="especie" label="Especie" objType="pokemon" queryKey={'especie'} queryAction={getSpecies} />
              <Input name="elemento" label="Elemento" objType="pokemon"  />
              <Input name="altura" label="Altura" type="number" objType="pokemon"  />
              <Input name="edad" label="Edad" type="number" objType="pokemon"  />
            </div>
          </form>
          <Detalle formRef={formRef} />
        </div>
      </div>
    </>
  );
};

export default Formulario;
