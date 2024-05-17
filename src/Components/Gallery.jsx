
import axios from "axios";
import { useEffect, useState } from "react";

const Gallery = () => {
    let baseURL = "https://picsum.photos/v2/list";
    // let baseURL = "https://api.unsplash.com/photos/?client_id=eJrGowlILBc7vmgyiBxiazUp8aXES8G-pA3yuxGQpis";
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`${baseURL}`).then((response) => {
            setData(response.data);
            { console.log("data:", data) }
        });
    }, []);
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {/* {data[0].map((e, index) => { */}
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded overflow-hidden"  >
                            {/* {console.log('e.urls.full: ', e.urls.full)} */}
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://placehold.co/600x400" />
                            {/* <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={data[0].urls.full} /> */}
                            {/* {console.log('data[0]: ', data[0].urls)} */}
                        </a>
                    </div>
                    {/* })} */}
                </div></div></section>

    );
};

export default Gallery;


//* Check this Artical https://saurabhnativeblog.medium.com/react30-project5-building-an-image-gallery-app-with-react-js-2f1095043561