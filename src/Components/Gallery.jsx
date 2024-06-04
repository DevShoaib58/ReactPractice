
import axios from "axios";
import { useEffect, useState } from "react";

const Gallery = () => {
    // let baseURL = "https://picsum.photos/v2/list";
    //* Here I'm Adding key into .env and creating variable 
    let GalleryKey = import.meta.env.VITE_SOME_KEY
    let baseURL = `https://api.unsplash.com/photos/?client_id=${GalleryKey}`;
    // console.log('GalleryKey: ', GalleryKey);
    //* Here Creating variable for API URL
    const [picData, setPicdata] = useState([])
    //* Here Creating state variable for data holding 
    useEffect(() => {
        const fetchingImage = async () => {
            try {
                const response = await axios.get(`${baseURL}`)
                setPicdata(response.data)
            }
            catch (error) {
                console.error(error)
            }
        }
        fetchingImage()
    }, [])

    //* Here in useEffect it will run the code as its load and in the last we need to give it a dependency array if or useEffect is dependent on any change
    return (
        <section className="text-gray-600 body-font">
            {console.log('picData: ', picData)}
            <h1 className=" text-4xl text-center py-4">Gallery App By using Unsplash API</h1>
            <div className="container px-5 py-4 mx-auto flex flex-wrap">
                {picData.map((obj, index) =>
                    <div key={index} className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src={obj.urls.regular} />
                            {/* <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361" /> */}
                        </div>
                    </div>


                )}

            </div>
        </section>
    )
};

export default Gallery;


//* Check this Artical https://saurabhnativeblog.medium.com/react30-project5-building-an-image-gallery-app-with-react-js-2f1095043561