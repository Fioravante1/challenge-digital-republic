import React, { useContext } from 'react';
import Modal from 'react-modal';
import Context from '../../context/Context';
import areaTotalParedes from '../../helpers/areaTotal';
import messageUser from '../../helpers/messageUser';
import styles from './modal.module.css';

function ModalResponse() {
  const { show, setShow, dataInputs } = useContext(Context);

  const messagePersonalityUser = messageUser(dataInputs);
  const litrosNecessrio = areaTotalParedes(dataInputs);

  return (
    <Modal ariaHideApp={false} isOpen={show} className={styles.container__modal}>
      <h1>{`Litros necessario: ${litrosNecessrio}L`}</h1>
      <h1>{messagePersonalityUser}</h1>
      <button type="button" onClick={() => setShow(false)}>Fechar</button>
    </Modal>
  );
}

export default ModalResponse;
