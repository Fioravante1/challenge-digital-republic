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

function FormComponent() {
  const { setShow, dataInputs } = useContext(Context);
  const [validForm, setValidForm] = useState({
    type: '',
    mensagem: '',
  });

  async function handleOnclick(event) {
    event.preventDefault();
    const isValid = await schemaForm.isValid(dataInputs);

    validPercentage(dataInputs);

    if (validPercentage(dataInputs)) return;

    if (!isValid) {
      setValidForm({
        type: 'error',
        mensagem: 'Os campos de altura e largura é obrigatorio e eles devem ter no maximo 15 metros!',
      });
    } else {
      setValidForm({
        type: '',
        mensagem: '',
      });
      setShow(true);
    }
  }

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
