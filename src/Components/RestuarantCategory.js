import { useState } from "react";
import RestuarantItemList from "./ResturantItemsList";

const RestuarantCategory = ({ data, collapse, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-1/2 cursor-pointer rounded-lg shadow-lg bg-slate-50 p-5 mx-auto my-5 text-xl font-bold">
      <div className="flex justify-between" onClick={handleClick}>
        <span className="text-2xl">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{"▼"}</span>
      </div>
      <div>
        {collapse && (
          <RestuarantItemList key={data.title} items={data.itemCards} />
        )}
      </div>
    </div>
  );
};

export default RestuarantCategory;
