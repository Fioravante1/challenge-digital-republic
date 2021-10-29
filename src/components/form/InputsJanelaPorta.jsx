import React, { useContext } from 'react';
import Context from '../../context/Context';

function InputsJanelaPorta() {
  const { dataInputs, setDataInputs } = useContext(Context);

  console.log(dataInputs);

  function handleOnChange(event) {
    const { name, value } = event.target;
    setDataInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <>
      <fieldset>
        <legend>Quantidade de janela?</legend>
        <input
          name="janela"
          type="number"
          placeholder="Quantidade de janela"
          onChange={handleOnChange}
        />
      </fieldset>

      <fieldset>
        <legend>Quantidade de porta?</legend>
        <input
          name="porta"
          type="number"
          placeholder="Quantidade de porta"
          onChange={handleOnChange}
        />
      </fieldset>
    </>
  );
}

export default InputsJanelaPorta;
