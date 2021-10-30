import React, { useContext } from 'react';
import Modal from 'react-modal';
import Context from '../../context/Context';
import styles from './modal.module.css';

function ModalResponse() {
  const { show, setShow } = useContext(Context);
  return (
    <Modal isOpen={show} className={styles.container__modal}>
      <h1>Aqui está a resposta!</h1>
      <button type="button" onClick={() => setShow(false)}>Fechar</button>
    </Modal>
  );
}

export default ModalResponse;
