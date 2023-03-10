import { useContext, useRef, useState } from 'react';
import {useQuery} from 'react-query';
import { FormContext } from '../../context/ContextoFormulario';
import {getTypes} from '../../hooks/useAPI'
import {ErrorComponent} from '../ErrorComponent';
import {Loading} from '../Loading';

export const Select = ({name, objType, label, queryKey, queryAction}) =>{
  const [inputs, dispatch] = useContext(FormContext)
  const [ activeInput, setActiveInput ] = useState()

  const onChange = (e) => {
    setActiveInput(e.target.value)
  };

  const onBlur = (e) => {
    e.preventDefault();
    dispatch({
      type: objType === "entrenador" ? "ACTUALIZAR_ENTRENADOR" : "ACTUALIZAR_POKEMON",
      payload: { [name]: activeInput} 
    })
  };
  const query = useQuery(queryKey, queryAction)
  const {data, error, isError, isLoading, isSuccess} = query;

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      {isError && <ErrorComponent/>}
      {isLoading && <Loading text={'Loading pokemon types'} />}
      {isSuccess && 
        <select name={name} disabled={!isSuccess} queryKey={queryKey} onChange={onChange} onBlur={onBlur}>
        {data && 
          !isLoading &&
          data?.results.map((elem) => (
            <option key={elem.name} id={elem.name} value={elem.name}>{elem.name}</option>
          ))}
        </select>
      }
    </div>
  )
}