import { useRecoilState, useResetRecoilState } from "recoil";
import { counter } from "./atoms";
import "./styles.css";

export default function App() {
  const [count, setCount] = useRecoilState(counter);
  const resetCount = useResetRecoilState(counter);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase count</button>
      <button onClick={resetCount}>Reset count</button>
    </div>
  );
}
