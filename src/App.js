import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Demo App</h1>
      <input type="text" value={myState}></input>
      <br />
      <button type="button" onClick={() => dispatch(decNumber())}>
        -
      </button>
      <button type="button" onClick={() => dispatch(incNumber())}>
        +
      </button>
    </div>
  );
}

export default App;
