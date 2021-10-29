import React from 'react';
import style from './form.module.css';
import Inputs from './Inputs';

function Form() {
  return (
    <div className={style.container__form}>
      <form>
        <Inputs />
      </form>
    </div>
  );
}

export default Form;
