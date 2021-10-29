import React, { useContext } from 'react';
import Context from '../../context/Context';

function InputsParedes() {
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
        <legend>Parede 1</legend>
        <input
          type="number"
          placeholder="Altura"
          onChange={handleOnChange}
          name="parede1_Altura"
        />
        <input
          type="number"
          placeholder="Largura"
          onChange={handleOnChange}
          name="parede1_Largura"
        />
      </fieldset>

      <fieldset>
        <legend>Parede 2</legend>
        <input
          name="parede2_Altura"
          type="number"
          placeholder="Altura"
          onChange={handleOnChange}
        />
        <input
          name="parede2_Largura"
          type="number"
          placeholder="Largura"
          onChange={handleOnChange}
        />
      </fieldset>

      <fieldset>
        <legend>Parede 3</legend>
        <input
          name="parede3_Altura"
          type="number"
          placeholder="Altura"
          onChange={handleOnChange}
        />
        <input
          name="parede3_Largura"
          type="number"
          placeholder="Largura"
          onChange={handleOnChange}
        />
      </fieldset>

      <fieldset>
        <legend>Parede 4</legend>
        <input
          name="parede4_Altura"
          type="number"
          placeholder="Altura"
          onChange={handleOnChange}
        />
        <input
          name="parede4_Largura"
          type="number"
          placeholder="Largura"
          onChange={handleOnChange}
        />
      </fieldset>
    </>
  );
}

export default InputsParedes;
