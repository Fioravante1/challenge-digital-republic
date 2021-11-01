import React, { useContext } from 'react';
import Modal from 'react-modal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { v4 as uuid } from 'uuid';
import Context from '../../context/Context';
import calcPaintCans from '../../helpers/calcPaintCans';
import styles from './modal.module.css';

function ModalResponse() {
  const { show, setShow, dataInputs } = useContext(Context);

  const cansQuantities = calcPaintCans(dataInputs);

  return (
    <Modal ariaHideApp={false} isOpen={show} className={styles.container__modal}>
      <div className={styles.acontainer__table}>

        {
        cansQuantities.map((value) => (
          <Table
            key={uuid()}
            striped
            bordered
            size="sm"
            variant="dark"
          >
            <thead>
              <tr>
                <th>{`Lata de ${value.liters} litros`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`Quantidade de lata: ${value.quantity}`}</td>
              </tr>
            </tbody>
          </Table>
        ))
      }
      </div>

      <Button
        className={styles.btn__modal}
        type="button"
        variant="dark"
        onClick={() => setShow(false)}
      >
        Fechar

      </Button>
    </Modal>
  );
}

export default ModalResponse;
