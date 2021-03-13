import { useState } from 'react';

import ImcTableView from './views/ImcTableView';
import ImcView from './views/ImcView';
import ImcController from './controllers/ImcController';
import Person from './domain/Person';

import './App.css';

function App() {

  const [controller,] = useState(new ImcController());
  const [person, setPerson] = useState(new Person());
  const [height, setHeight] = useState(0.00);
  const [weight, setWeight] = useState(0.00);

  const calculateImc = async (evt) => {
    evt.preventDefault();

    var newPerson = new Person(parseFloat(height), parseFloat(weight));

    const personCalculated = await controller.calculate(newPerson.toObject());
    setPerson(personCalculated);
  }

  return (
    <div className="container">
      <div className="data">
        <div className="form">
          <div className="row">
            <ImcTableView />
          </div>
          <hr />
          <form onSubmit={calculateImc}>
            <div className="row">
              <label>Altura</label>
              <input id="altura" placeholder="0.00" value={height} onChange={e => setHeight(e.target.value)} />
            </div>
            <div className="row">
              <label>Peso</label>
              <input id="peso" placeholder="0.00" value={weight} onChange={e => setWeight(e.target.value)} />
            </div>
            <button type="submit" className="action">Calcular</button>
          </form>
        </div>
      </div>
      <hr />
      <ImcView className="data" person={person} />
    </div>
  );
}

export default App;
