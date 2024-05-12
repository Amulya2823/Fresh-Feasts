import { useState } from "react";
import RestuarantItemList from "./ResturantItemsList";


const RestuarantCategory = ({data , collapse ,setShowIndex }) => {
    const handleClick = () => {
        setShowIndex();
    }

    return <div className="w-1/2 cursor-pointer p-5 mx-auto my-5 shadow-lg bg-gray-100 font-bold">
        <div className="flex justify-between" onClick={handleClick}>
            <span className="text-lg ">{data.title } ({data.itemCards.length})</span>
            <span>{"▼"}</span>
        </div>
        <div>
            { collapse && <RestuarantItemList key = {data.title} items={data.itemCards}/>}
        </div>
        
    </div>
}

export default RestuarantCategory;