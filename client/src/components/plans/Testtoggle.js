import { useState } from "react";

const ToggleItem = ({ discription, id }) => {
  const [toggleThisElement, setToggleThisElement] = useState(false);
  return (
    <div className="single-history" key={id}>
      <button
        className="h-head"
        onClick={() => setToggleThisElement((prev) => !prev)}
      >
        click this btn for toggle h-info block {id}
      </button>

      {toggleThisElement && <div className="h-info">{discription}</div>}
    </div>
  );
};

export default function testtoggle() {
  const data = ["first", "second", "third"];

  return (
    <>
      {data.map((d, id) => {
        return <ToggleItem id={id} discription={d} />;
      })}
    </>
  );
}
