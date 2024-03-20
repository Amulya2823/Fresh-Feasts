import { useState , useEffect } from "react";
import { MENU_API } from "./constants";

const useRestuarantData = (resId) => {
    const [resData,setresData] = useState(null);

    useEffect( () => {
        fetchData();
     },[])
 
    const fetchData = async () => {
 
    const data = await fetch(MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    setresData(json.data);
    }
    return resData;
}

export default useRestuarantData;