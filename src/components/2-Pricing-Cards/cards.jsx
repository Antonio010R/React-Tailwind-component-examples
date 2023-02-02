import React from "react";
import FeaturesList from "./features-list";

const Cards = ({ item, select, onClickHandler }) => {
  const { id, data, perMonth, type } = item;
  const selectStyle = select === id ? "bg-violet-600" : "bg-slate-600";
  const featList = [
    `${data} of storage`,
    "Option to add members",
    "Extra member benefits",
  ];
  return (
    <div className={`flex flex-col  ${selectStyle} rounded-xl`}>
      {console.log(selectStyle)}
      <div className="p-8 mx-3 mt-3 rounded-t-lg bg-slate-800 text-center text-white">
        <p className="uppercase">{type}</p>
        <h2 className="mt-10 text-5xl font-serif">{data}</h2>
        <h3 className="mt-2">${perMonth}/Month</h3>
        <button
          className={`${selectStyle} mt-4 my-6 border border-violet-600 rounded-lg py-3 px-10 hover:bg-violet-800 hover:border-violet-800 duration-500`}
          onClick={() => onClickHandler(id)}
        >
          Purchase
        </button>
      </div>
      <div className="border-t border-slate-700">
        <div className="flex flex-col justify-center p-8 mx-3 mb-3 rounded-b-lg bg-slate-800 text-white text-sm text-center leading-7 whitespace-nowrap">
          {featList.map((listItem, id) => {
            return <FeaturesList key={id} text={listItem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
