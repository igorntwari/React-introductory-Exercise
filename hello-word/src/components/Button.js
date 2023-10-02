import React from 'react';

export default function Button() {
 const[count, setCount] = React.useState(0)
function add(){
    setCount(count + 1)
}

  return (
    <div>
        <h1>button has clicked: {count} times</h1>
            <button onClick={add}>click me</button>
    </div>
  );
}
