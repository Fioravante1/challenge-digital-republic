import React, { useState } from 'react';

function InputsParedes() {
  const [parede1, setParede1] = useState({});

  console.log(parede1);

  function handleOnChange(event) {
    const { name, value } = event.target;
    setParede1((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <>
      <fieldset>
        <legend>Parede 1</legend>
        <input type="number" placeholder="Altura" />
        <input type="number" placeholder="Largura" />
      </fieldset>

      <fieldset>
        <legend>Parede 2</legend>
        <input type="number" placeholder="Altura" />
        <input type="number" placeholder="Largura" />
      </fieldset>

      <fieldset>
        <legend>Parede 3</legend>
        <input type="number" placeholder="Altura" />
        <input type="number" placeholder="Largura" />
      </fieldset>

      <fieldset>
        <legend>Parede 4</legend>
        <input type="number" placeholder="Altura" />
        <input type="number" placeholder="Largura" />
      </fieldset>
    </>
  );
}

export default InputsParedes;
