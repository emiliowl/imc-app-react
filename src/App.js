import { useState } from 'react';
import { useInput } from './hooks/useInput';

import ImcTableView from './views/ImcTableView';
import ImcView from './views/ImcView';
import ImcForm from './forms/ImcForm';
import ImcController from './controllers/ImcController';
import Person from './domain/Person';

import './App.css';

function App() {

  const [controller,] = useState(new ImcController());
  const [person, setPerson] = useState(new Person());
  
  const calculateImc = async (height, weight) => {
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
          <ImcForm onSubmit={calculateImc} person={person} />
        </div>
      </div>
      <hr />
      <ImcView className="data" person={person} />
    </div>
  );
}

export default App;
