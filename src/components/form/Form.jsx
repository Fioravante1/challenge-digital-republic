/* eslint-disable react/jsx-no-bind */
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Context from '../../context/Context';
import schemaForm from '../../helpers/schemaForm';
import validPercentage from '../../helpers/validPercentage';
import ModalResponse from '../modal/Modal';
import style from './form.module.css';
import InputsJanelaPorta from './InputsJanelaPorta';
import InputsParedes from './InputsParedes';

function Form() {
  const { setShow } = useContext(Context);
  return (
    <div className={style.container__form}>
      <form>
        <div className={style.container__paredes}>
          <InputsParedes />
        </div>
        <div className={style.container__porta__janela}>
          <InputsJanelaPorta />
          <button type="button" onClick={() => setShow(true)}>Consultar</button>
        </div>
      </form>
      <ModalResponse />
    </div>
  );
}

export default Form;
