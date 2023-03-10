import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "../../context/ContextoFormulario";
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useQuery } from "react-query";
import SpeciesList from "../Formulario/SpeciesList";

export const InputModal = ({ name, label, objType, queryKey, queryAction }) => {
  const [ dispatch] = useContext(FormContext)
  const [ activeInput, setActiveInput ] = useState()
  const [page, setPage] = useState(null)
  const [show, setShow] = useState(false);
  const query = useQuery(queryKey, queryAction)
  const {data, error, isError, isLoading, isSuccess} = query;
  useEffect(()=>{
    if(data){
      console.log(data)
      setPage(data)
    }
    
  },[data])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    
    dispatch({
      type: objType === "entrenador" ? "ACTUALIZAR_ENTRENADOR" : "ACTUALIZAR_POKEMON",
      payload: { [e.target.id]: activeInput} 
    })
    
  };
  
  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <Button variant="primary" onClick={handleShow}>
        Seleccionar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Seleccionar {label}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onChange={(e)=>console.log(e.value)}>
            <SpeciesList objType={objType} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default InputModal;

InputModal.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  objType: PropTypes.string.isRequired // si es un input de ENTRENADOR o POKEMON
}