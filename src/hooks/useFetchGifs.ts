import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGIfts";

const useFetchGifs = ( category : any ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getImages = async (category: any) => {
        const newImages = await getGifts(category);
        setImages(newImages);
        setIsLoading(false);
    };
    
    useEffect(() => {
        getImages(category);
    }, []);

    return {
        images,
        isLoading
    }


}

export default useFetchGifs
