import {useQuery} from 'react-query';
import {useType} from '../../hooks/useAPI'
import {ErrorComponent} from '../ErrorComponent';
import {Loading} from '../Loading';

export const SelectType = (name, objType) =>{
  const query = useQuery(['types'], useType)
  const {data, error, isError, isLoading} = query;

  return (
    <div className="input-contenedor">
      <label>Tipo:</label>
      {isError && <ErrorComponent/>}
      {isLoading && <Loading />}
      <select name={name}>
        {data && 
          !isLoading &&
          data?.results.map((elem) => (
            <option value={elem.name}>{elem.name}</option>
          ))}
      </select>
    </div>
  )
}