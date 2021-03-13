import { useContext } from 'react';
import { PersonContext } from '../contexts/PersonContextProvider';
import { useInput } from '../hooks/useInput';

function ImcForm({onSubmit}) {
  const { person } = useContext(PersonContext);

  const [height, heightProps, resetHeight] = useInput(0.00);
  const [weight, weightProps, resetWeight] = useInput(0.00);

  const submit = (evt) => {
    evt.preventDefault();

    onSubmit(height, weight)
    resetHeight();
    resetWeight();
  }

  return (
    <form onSubmit={submit}>
      <div className="row">
        <label>Altura</label>
        <input id="altura" placeholder="0.00" {...heightProps} />
      </div>
      <div className="row">
        <label>Peso</label>
        <input id="peso" placeholder="0.00" {...weightProps} />
      </div>
      
      <button type="submit" className="action">
        Calcular
      </button>
      
      <hr />
      
      <label><strong>Altura:</strong> {person.height}</label>
      <br />
      <label><strong>Peso:</strong> {person.weight}</label>
    </form>
  );
}

export default ImcForm;
