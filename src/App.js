import React, { useState } from 'react';

const renderedList = list => list.map(i => <li>{i}</li>);

function App() {
  const [list, setList] = useState([1,2,3]);

  return (
    <div>
      <span>
        <button onClick={() => list.length > 0 ? setList([...list, list[list.length-1] + 1]) : setList([1])}>
          +
        </button>
        <button onClick={() => list.length > 0 && setList(list.slice(0, list.length - 1))}>
          -
        </button>
      </span>
      <ul>
        {renderedList(list)}
      </ul>
    </div>
  );
}

export default App;
