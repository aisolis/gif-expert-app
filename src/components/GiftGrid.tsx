import GiftItem from "./GiftItem";
import useFetchGifs from "../hooks/useFetchGifs";


const GiftGrid = ({ category }: any) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            {
                isLoading && ( <h2>Cargando...</h2> )       
            }

            
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map(( image : any) => (
                        <GiftItem 
                            key={ image.id }
                            { ...image } 
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GiftGrid
