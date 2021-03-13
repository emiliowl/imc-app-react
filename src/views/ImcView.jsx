function ImcView(props) {
  console.log('oh well... rendering ' + JSON.stringify(props));
  
  const { person } = props;

  return (
    <div className={props.className}>
      Seu IMC &eacute; <span id="imc">{person.imc}</span> ==>{" "}
      <strong>{person.imcDescription}</strong>
    </div>
  );
}

export default ImcView;
