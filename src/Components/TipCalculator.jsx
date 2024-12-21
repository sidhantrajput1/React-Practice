import { useState } from "react";

function App() {
  return (
    <div className="cal">
      <TipCalCulator />
    </div>
  );
}

function TipCalCulator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset () {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div className="tipcal">
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did you friend like the service
      </SelectPercentage>
      {bill > 0 && <>
      <OutPut bill={bill} tip={tip} />
      <Reset onClick={handleReset}/>
      </>}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label htmlFor="">How much was the Bill ?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div value={percentage} onChange={(e) => onSelect(Number(e.target.value))}>
      <label>{children}</label>
      <select>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was Okay (5%)</option>
        <option value="10">It was Good (10%)</option>
        <option value="20">Abssolutely (20%)</option>
      </select>
    </div>
  );
}

function OutPut({ bill, tip }) {
  return (
    <div>
      <h3>You Pay ${bill + tip} (${bill} + ${tip} tip) </h3>
    </div>
  );
}

function Reset({onClick}) {
  return (
    <div onClick={onClick}>
      <button>Reset</button>
    </div>
  );
}

export default App;

/*


.cal {
  height: 100vh;
}

.tipcal {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  height: 10vh;
  align-items: center;
  background-color: #819dc9;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  padding: 5rem;
}
  
*/