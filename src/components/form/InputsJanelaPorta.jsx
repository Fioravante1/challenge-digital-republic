import React from 'react';

function InputsJanelaPorta() {
  return (
    <>
      <fieldset>
        <legend>Quantidade de janela?</legend>
        <input type="number" placeholder="Quantidade de janela" />
      </fieldset>

      <fieldset>
        <legend>Quantidade de porta?</legend>
        <input type="number" placeholder="Quantidade de porta" />
      </fieldset>
    </>
  );
}

export default InputsJanelaPorta;
