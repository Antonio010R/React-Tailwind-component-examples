import React from "react";
import Cards from "./cards";
import { useState } from "react";

const desc = [
  {
    id: 1,
    data: "100GB",
    perMonth: 1.99,
    type: "basic",
  },
  {
    id: 2,
    data: "200GB",
    perMonth: 3.99,
    type: "standard",
  },
  {
    id: 3,
    data: "2 TB",
    perMonth: 8.99,
    type: "premium",
  },
];

const CardList = () => {
  const [select, setSelect] = useState(2);

  const onClickHandler = (id) => {
    setSelect(id);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className="flex flex-col my-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6 md:my-0">
        {desc.map((item) => (
          <Cards
            key={item.id}
            item={item}
            select={select}
            onClickHandler={onClickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
