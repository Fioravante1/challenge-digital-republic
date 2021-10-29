import React from 'react';
import style from './form.module.css';
import InputsParedes from './InputsParedes';

function Form() {
  return (
    <div className={style.container__form}>
      <form>
        <InputsParedes />
      </form>
    </div>
  );
}

export default Form;
