import React, { useState } from 'react';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

function Calculator() {
  const [calOperation, setCalOperation] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleEvent = (e) => {
    const updateState = calculate(calOperation, e.target.value);
    setCalOperation(updateState);
  };

  const Data = [
    {
      id: 1,
      title: 'AC',
    },
    {
      id: 2,
      title: '+/-',
    },
    {
      id: 3,
      title: '%',
    },
    {
      id: 4,
      title: '7',
    },
    {
      id: 5,
      title: '8',
    },
    {
      id: 6,
      title: '9',
    },
    {
      id: 7,
      title: '4',
    },
    {
      id: 8,
      title: '5',
    },
    {
      id: 9,
      title: '6',
    },
    {
      id: 10,
      title: '1',
    },
    {
      id: 11,
      title: '2',
    },
    {
      id: 12,
      title: '3',
    },
    {
      id: 13,
      title: '0',
    },
    {
      id: 19,
      title: '.',
    },
  ];
  const Operators = [
    {
      id: 14,
      title: '÷',
    },
    {
      id: 15,
      title: 'x',
    },
    {
      id: 16,
      title: '-',
    },
    {
      id: 17,
      title: '+',
    },
    {
      id: 18,
      title: '=',
    },
  ];
  return (
    <main className="math_wrapper">
      <h2> Let&apos;s do some Math!</h2>

      <section className="maths">
        <section className="screen">
          {!calOperation ? (
            <span> 0 </span>
          ) : (
            <span>
              {calOperation.total}
              {' '}
              {calOperation.operation}
              {' '}
              {calOperation.next}
            </span>
          )}
        </section>

        <section className="calculator">
          <article className="digits">
            {Data.map(({ id, title }) => (
              <Buttons
                handleEvent={handleEvent}
                className="btns"
                key={id}
                title={title}
              />
            ))}
          </article>
          <article className="operators">
            {Operators.map(({ id, title }) => (
              <Buttons
                handleEvent={handleEvent}
                className="operatorBtns"
                key={id}
                title={title}
              />
            ))}
          </article>
        </section>
      </section>
    </main>
  );
}

export default Calculator;
