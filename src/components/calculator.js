const Calculator = () => (
  <div className="calc">
    <section className="screen">
      0
    </section>

    <section className="calc-buttons">
      <div className="calc-button-row">
        <button type="button" className="calc-button">AC</button>
        <button type="button" className="calc-button">+/-</button>
        <button type="button" className="calc-button">%</button>
        <button type="button" className="calc-button">÷</button>
      </div>
      <div className="calc-button-row">
        <button type="button" className="calc-button">7</button>
        <button type="button" className="calc-button">8</button>
        <button type="button" className="calc-button">9</button>
        <button type="button" className="calc-button">×</button>
      </div>
      <div className="calc-button-row">
        <button type="button" className="calc-button">4</button>
        <button type="button" className="calc-button">5</button>
        <button type="button" className="calc-button">6</button>
        <button type="button" className="calc-button">-</button>
      </div>
      <div className="calc-button-row">
        <button type="button" className="calc-button">1</button>
        <button type="button" className="calc-button">2</button>
        <button type="button" className="calc-button">3</button>
        <button type="button" className="calc-button">+</button>
      </div>
      <div className="calc-button-row">
        <button type="button" className="calc-button double">0</button>
        <button type="button" className="calc-button">.</button>
        <button type="button" className="calc-button">=</button>
      </div>
    </section>
  </div>
);

export default Calculator;
