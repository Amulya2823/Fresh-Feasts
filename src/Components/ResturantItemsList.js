import { RES_URL } from "../utils/constants";

const RestuarantItemList = ({items}) => {
    return <div>
        {items.map( item => <div key={item.card.info.id}
        className="flex justify-between text-left border-b-2"
        >
        <div className="py-3 w-9/12 p-2">
            <div className="py-2 font-medium">
                <span>{item.card.info.name}</span><br></br>
                <span>Rs-{item.card.info.defaultPrice/100 ? item.card.info.defaultPrice/100 : item.card.info.price/100}</span>
            </div>
            <div>
                <p className="font-thin">{item.card.info.description}</p>
            </div>
        </div>
        <div className="w-3/12 p-4 ">
            <img src={ RES_URL + item.card.info.imageId} className="rounded-lg"></img>
        </div>
            
        </div>)}
    </div>
}

export default RestuarantItemList;