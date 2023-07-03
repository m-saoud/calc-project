import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  const [calc, setcalc] = useState("");
  const [result, setresult] = useState("");

  const ops = ["/", "*", "-", "+"];

  const updateCalc = (value) => {
    if (ops.includes(value) && calc === "") {
      return;
    }
    setcalc(calc + value);

    if (!ops.includes(value)) {
      setresult(eval(calc + value).toString());
    }
  };

  const creatDigites = () => {
    const digites = [];
    for (let i = 0; i < 10; i++) {
      digites.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digites;
  };

  const calcEqula = () => {
    setcalc(eval(calc.toString()));
  };

  const deletLast = () => {
    if (calc == "") {
      return;
    }
    const val = calc.slice(0, -1);
    setcalc(val);
    setresult(val);
  };

  const newOps = () => {
    setcalc("");
    setresult("");
  };

  const storgIn = () => {
   
    setresult("");
    console.log(storgIn);
  };
 
  return (
    <>
      <Container>
        <div className="calculater">
          <div className="display">
            {result ? <span>({result})</span> : ""} {calc || "0"}
          </div>

          <div className="operatures">
            <button onClick={() => updateCalc("/")}>/</button>
            <button onClick={() => updateCalc("*")}>*</button>
            <button onClick={() => updateCalc("+")}>+</button>
            <button onClick={() => updateCalc("-")}>-</button>
            <button onClick={deletLast}>Del</button>
            <button onClick={newOps}>CE</button>
            <button onClick={storgIn}>+M</button>
            <button onClick={localStorage.getItem({result})}>M</button>
          </div>
          <div className="digites">
            {creatDigites()}
            <button onClick={() => updateCalc("0")}>0</button>
            <button onClick={() => updateCalc(".")}>.</button>
            <button onClick={calcEqula}>=</button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
