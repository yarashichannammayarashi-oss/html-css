import  { useEffect, useState } from 'react'
import Greeting from './Greeting';
export default function App() {
 // let name = "Gamana";

  const[name, setName] = useState("Gamana");
  const[color, setColor] = useState("Red");
  const[count, setCount] = useState(0);
  const[, setRunning] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000)
  });
  return (
    <div>
      <Greeting name={name}/>
      <button onClick={() => setName("Chandu")}>click for change</button>
      <h2>My rfev color is {color}!</h2>
      <button onClick={() => setColor("Black")}>reavel color</button>
      <h2>The count is {count}!</h2>
      <button onClick={() => setCount(count + 1)}>count</button>
    <h1>The time start now {count} !</h1>
    <button onClick={() => setRunning(false)}>Stop count</button>
    <button onClick={() => setRunning(true)}>Start count</button>
    <Greeting name={name}/>
    </div>
  );
}

