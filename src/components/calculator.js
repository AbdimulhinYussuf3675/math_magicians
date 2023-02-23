import React, { useState } from 'react';
import calculate from './logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const calcultion = (event) => {
    const button = event.target.innerHTML;
    const result = calculate(state, button);
    setState(result);
  };
  const { total, operation, next } = state;
  return (
    <>
      <section className="calcContainer">
        <p className="calcText">Lets do some Math!</p>

        <div className="calc">
          <section className="screen">
            <div>
              {total}
              {operation}
              {next}
            </div>
          </section>

          <section className="calc-buttons">
            <div className="calc-button-row">
              <button type="button" className="calc-button" onClick={calcultion}>
                AC
              </button>
              <button type="button" className="calc-button" onClick={calcultion}>
                +/-
              </button>
              <button type="button" className="calc-button" onClick={calcultion}>
                %
              </button>
              <button type="button" className="calc-button" onClick={calcultion}>
                ÷
              </button>
            </div>
            <div className="calc-button-row">
              <button type="button" className="calc-button" onClick={calcultion}>
                7
              </button>
              <button type="button" className="calc-button" onClick={calcultion}>
                8
              </button>
              <button type="button" className="calc-button" onClick={calcultion}>
                9
              </button>
              <button type="button" className="calc-button" onClick={calcultion}>
                ×
              </button>
            </div>
            <div className="calc-button-row">
              <button type="button" className="calc-button" onClick={calcultion}>
                4
              </button>
              <button type="button" className="calc-button" onClick={calcultion}>
                5
              </button>
              <button type="button" className="calc-button" onClick={calcultion}>
                6
              </button>
              <button type="button" className="calc-button" onClick={calcultion}>
                -
              </button>
            </div>
            <div className="calc-button-row">
              <button type="button" className="calc-button" onClick={calcultion}>
                1
              </button>
              <button type="button" className="calc-button" onClick={calcultion}>
                2
              </button>
              <button type="button" className="calc-button" onClick={calcultion}>
                3
              </button>
              <button type="button" className="calc-button" onClick={calcultion}>
                +
              </button>
            </div>
            <div className="calc-button-row">
              <button
                type="button"
                className="calc-button double"
                onClick={calcultion}
              >
                0
              </button>
              <button type="button" className="calc-button" onClick={calcultion}>
                .
              </button>
              <button type="button" className="calc-button" onClick={calcultion}>
                =
              </button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Calculator;
