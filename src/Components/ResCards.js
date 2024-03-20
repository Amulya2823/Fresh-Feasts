import { RES_URL } from "../utils/constants";

const Rescards = (props) => {
    const {resData} = props

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        sla,
        costForTwo

    } = resData?.info;

    return(
        <div className='m-3 p-3 w-72 rounded-lg hover:shadow-2xl' >
            <img className='rounded-lg w-72' src={ RES_URL + cloudinaryImageId} />  
            <h4 className="font-bold py-2">{name}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{sla.slaString}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

export const withOfferLabel = (ResCards) => {
    return (props) => {
        return (
        <div>
            <label>Promoted</label>
            <ResCards {...props}/>
        </div>
        );
    };
};

export default Rescards;
  