/* eslint-disable react/jsx-no-bind */
import React, { useContext } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Context from '../../context/Context';

function InputsWall() {
  const { setDataInputs, dataInputs } = useContext(Context);

  function handleOnChange(event) {
    const { name, value } = event.target;
    setDataInputs({
      ...dataInputs,
      [name]: value,
    });
  }

  return (
    <>

      <Row>
        <Col>
          <Form.Label>Altura parede 1</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            name="parede1_Altura"
            type="number"
            placeholder="Altura"
          />
        </Col>

        <Col>
          <Form.Label>Largura parede 1</Form.Label>
          <Form.Control
            name="parede1_Largura"
            type="number"
            placeholder="Largura"
            onChange={handleOnChange}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Label>Altura parede 2</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            name="parede2_Altura"
            type="number"
            placeholder="Altura"
          />
        </Col>

        <Col>
          <Form.Label>Largura parede 2</Form.Label>
          <Form.Control
            name="parede2_Largura"
            type="number"
            placeholder="Largura"
            onChange={handleOnChange}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Label>Altura parede 3</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            name="parede3_Altura"
            type="number"
            placeholder="Altura"
          />
        </Col>

        <Col>
          <Form.Label>Largura parede 3</Form.Label>
          <Form.Control
            name="parede3_Largura"
            type="number"
            placeholder="Largura"
            onChange={handleOnChange}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Label>Altura parede 3</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            name="parede4_Altura"
            type="number"
            placeholder="Altura"
          />
        </Col>

        <Col>
          <Form.Label>Largura parede 3</Form.Label>

          <Form.Control
            name="parede4_Largura"
            type="number"
            placeholder="Largura"
            onChange={handleOnChange}
          />
        </Col>
      </Row>
    </>
  );
}

export default InputsWall;
