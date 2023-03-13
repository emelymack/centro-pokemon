import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getSpecies } from "../../hooks/useAPI";
import { Loading } from "../Loading";
import { ErrorComponent } from "../ErrorComponent";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormContext } from "../../context/ContextoFormulario";

export default function SpeciesList({objType, name}){
  const [offset, setOffset] = useState(0);
  const query = useQuery(["species",offset], () => getSpecies(offset));
  const [ , dispatch ] = useContext(FormContext)
  const [ activeInput, setActiveInput ] = useState()
  const {data, isError, isLoading} = query;

  const handleBackPage = () => {
    setOffset((prev) => Math.max(0, prev - 20))
  }
  const handleNextPage = () => {
    setOffset((prev) => prev + 20)
  }

  const onClick = (e)=>{
    setActiveInput(e.target.value)
  }
  const onBlur = (e) =>{
    dispatch({
      type: objType === "entrenador" ? "ACTUALIZAR_ENTRENADOR" : "ACTUALIZAR_POKEMON",
      payload: { [e.target.name]: activeInput} 
    })
  }

  useEffect(() =>{}, [offset])

  if(isLoading){
    return <Loading text={'Cargando especies...'} />;
  }
  if(isError){
    return <ErrorComponent /> ;
  }

  return(
    <>
    {data && 
      !isLoading &&
      data?.results.map((elem, index) => (
      <div key={`inline-radio-${index}`} className="mb-3">
        <Form.Check
          inline
          label={elem.name}
          value={elem.name}
          name='especie'
          type='radio'
          key={`species-${index}`}
          onClick={onClick}
          onBlur={onBlur}
        />
      </div>
    ))}
    <div className="d-flex justify-content-between">
      <Button onClick={handleBackPage} disabled={offset === 0 ? true : false}>Prev</Button>
      <Button onClick={handleNextPage} disabled={data.next === null ? true : false}>Next</Button>
    </div>
    </>

  )
}