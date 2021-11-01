/* eslint-disable react/jsx-no-bind */
import React, { useContext } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Context from '../../context/Context';

function InputsJanelaPorta() {
  const { setDataInputs } = useContext(Context);

  function handleOnChange(event) {
    const { name, value } = event.target;
    setDataInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <>

      <Row>
        <Col>
          <Form.Label>Qual a quantidade de janela?</Form.Label>
          <Form.Control
            name="janela"
            type="number"
            placeholder="Quantidade de janela"
            onChange={handleOnChange}
          />
        </Col>
        <Col>
          <Form.Label>Qual a quantidade de porta?</Form.Label>
          <Form.Control
            name="porta"
            type="number"
            placeholder="Quantidade de porta"
            onChange={handleOnChange}
          />
        </Col>
      </Row>
    </>
  );
}

export default InputsJanelaPorta;
