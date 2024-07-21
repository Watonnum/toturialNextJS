'use client';

import { useEffect, useState } from 'react';

interface FooProps {
  count: number;
}

const Foo = ({ count }: FooProps) => {
  useEffect(() => {
    console.log(123);
  });
  return <div>{count}</div>;
};

const HomePage = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click to Inc</button>
      <Foo count={count}></Foo>
    </>
  );
};

export default HomePage;
