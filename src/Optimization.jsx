import React, { memo, useState } from "react";
// Components
const IncreaseCount = memo((props) => {
  console.log("Button -> Count");
  return <button onClick={props.onIncrementCount}>Increase Count</button>;
});

const IncreaseAge =memo((props) => {
  console.log("Button -> Age");
  return <button onClick={props.onIncrementAge}>Increase Age</button>;
});

const Title =memo((props) => {
  console.log(`Title -> ${props.title}`);
  return <h1>{props.title}</h1>;
});

//Main Component
function Optimization() {
  //States
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);
  //Functions
  const handleIncrementCount = () => {
    setCount(count + 1);
  };
  const handleIncrementAge = () => {
    setAge(age + 1);
  };
  return (
    <div className="App">
      <Title title="Count" />
      <h2>{count}</h2>
      <IncreaseCount onIncrementCount={handleIncrementCount} />
      <Title title="Age" />
      <h2>{age}</h2>
      <IncreaseAge onIncrementAge={handleIncrementAge} />
    </div>
  );
}
export default Optimization;
