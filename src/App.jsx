import { useState } from 'react';

import { usePerson } from './hooks/usePerson';

import ImcTableView from './views/ImcTableView';
import ImcView from './views/ImcView';
import ImcForm from './views/forms/ImcForm';
import ImcController from './controllers/ImcController';
import Person from './domain/Person';

import './App.css';

function App() {
  const [,setPerson] = usePerson();

  const [controller,] = useState(new ImcController());

  const calculateImc = async (height, weight) => {
    let person = new Person(parseFloat(height), parseFloat(weight));
    person = await controller.calculate(person.toObject());
    setPerson(person);
  }

  return (
    <div className="container">
      <div className="data">
        <div className="form">
          <div className="row">
            <ImcTableView />
          </div>
          <hr />
          <ImcForm onSubmit={calculateImc} />
        </div>
      </div>
      <hr />
      <ImcView className="data" />
    </div>
  );
}

export default App;
