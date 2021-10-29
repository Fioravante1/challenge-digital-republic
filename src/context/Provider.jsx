import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [dataInputs, setDataInputs] = useState({
    inputsParedes: {},
    inputsPortaJanela: {},
  });

  const objContext = { dataInputs, setDataInputs };

  return (
    <Context.Provider value={objContext}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
