import React from 'react';
import ReactDOM from 'react-dom';

function Numbers(props) {
   const numbers = props.numbers;
   const listItems = numbers.map((number) =>
      <li>{number}</li>
   );
   return (
      <ul>{listItems}</ul>
   );
}

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
   <Numbers numbers={numbers} />,
   document.getElementById('numb')
);

export default Numbers;