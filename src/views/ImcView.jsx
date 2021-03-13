import { useContext } from 'react';
import { PersonContext } from '../contexts/PersonContextProvider';

function ImcView(props) {
  console.log('oh well... rendering ' + JSON.stringify(props));
  
  const { person } = useContext(PersonContext);

  return (
    <div className={props.className}>
      Seu IMC &eacute; <span id="imc">{person.imc}</span> ==>{" "}
      <strong>{person.imcDescription}</strong>
    </div>
  );
}

export default ImcView;
