import PropTypes from "prop-types";
import { useState } from "react";

import './style/index.css'


export const CounterApp = ({ value }) => {


  const [cont, setCont] = useState( value )
  
const Cont = () => setCont(cont + 1)


const menosCont = () =>  setCont(cont - 1)


const resetCont = () =>  setCont(100)

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { cont } </h2>
      <button onClick={ Cont }>
        + 1
      </button>
      <button onClick={ menosCont }>
        - 1
      </button>
      <button onClick={ resetCont }>
        reste
      </button>
    </>
  );
};

CounterApp.prototype = {
  value: PropTypes.number.isRequired,
};
