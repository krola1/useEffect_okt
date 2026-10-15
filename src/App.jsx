import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useeffect kjører ", count);
  }, []);

  console.log("test", count);

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>GO!!!"!</button>
      <h1>{count}</h1>
    </>
  );
}
