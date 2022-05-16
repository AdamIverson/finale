import React from "react";
import { useSelector } from "react-redux";

function Test() {
  const testStore = useSelector((store) => store.setTest);

  return (
    <div>
      <h1>SUCCESSFUL TEST</h1>
      <ul>
        {testStore.map((unit) => {
          return (
            <li key={unit.id}>
              {unit.testData}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Test;
