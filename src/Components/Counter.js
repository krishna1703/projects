import { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    if (counter === 0) return;
    setCounter((prev) => prev - 1);
  };

  return (
    <div className="bg-black w-1/2 h-96 m-auto mt-32 rounded-xl ">
      <div className="text-white flex justify-center flex-col items-center ">
        <h2 className="  text-xl m-2 rounded-sm bg-slate-600 p-2">
          This is counter application
        </h2>
        <div className="flex justify-between gap-10 mt-20 items-center">
          <button className="bg-green-900 p-5 rounded-xl" onClick={increment}>
            increment
          </button>
          <p> Counter : {counter}</p>
          <button className="bg-red-900 p-5 rounded-xl" onClick={decrement}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
