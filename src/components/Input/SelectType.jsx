import { useContext, useState } from 'react';
import {useQuery} from 'react-query';
import { FormContext } from '../../context/ContextoFormulario';
import {getType} from '../../hooks/useAPI'
import {ErrorComponent} from '../ErrorComponent';
import {Loading} from '../Loading';

export const SelectType = (name, objType, label) =>{
  const [inputs, dispatch] = useContext(FormContext)
  const [ activeInput, setActiveInput ] = useState()

  const onChange = (e) => {
    setActiveInput(e.target.value)
  };

  const onBlur = (e) => {
    e.preventDefault();
    dispatch({
      type: objType === "entrenador" ? "ACTUALIZAR_ENTRENADOR" : "ACTUALIZAR_POKEMON",
      payload: { tipoPokemon: activeInput} 
    })
  };
  const query = useQuery(['types'], getType)
  const {data, error, isError, isLoading, isSuccess} = query;

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>Tipo</label>
      {isError && <ErrorComponent/>}
      {isLoading && <Loading text={'Loading pokemon types'} />}
      {isSuccess && 
        <select name={name} disabled={!isSuccess} onChange={onChange} onBlur={onBlur}>
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