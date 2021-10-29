import React from 'react';
import style from './form.module.css';
import InputsJanelaPorta from './InputsJanelaPorta';
import InputsParedes from './InputsParedes';

function Form() {
  return (
    <div className={style.container__form}>
      <form>
        <div className={style.container__paredes}>
          <InputsParedes />
        </div>
        <div className={style.container__porta__janela}>
          <InputsJanelaPorta />
        </div>
      </form>
    </div>
  );
}

export default Form;
