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
      <Form onSubmit={handleOnclick}>
        {validForm.type === 'error' ? <p>{validForm.mensagem}</p> : ''}

        <InputsParedes />

        <InputsJanelaPorta />

        <Button
          className={style.btn__form}
          variant="success"
          type="submit"
          onClick={handleOnclick}
        >
          Consultar
        </Button>

      </Form>

      <ModalResponse />
    </div>
  );
}

export default FormComponent;
