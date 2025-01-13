const API_KEY = 'X6iQ8RFUPSWCvjZKfkFk0UPtj3D6reYo';

export const getGifts = async ( category : any ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img: any) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
};