import axios from "axios";
import { useEffect, useState } from "react";
import YTvideo from "./Youtube_video/YTvideo";

const SpaceLaunch = () => {


    const [data, setData] = useState([])
    useEffect(() => {
        fetchingData()
    }, [])
    const fetchingData = async () => {
        try {
            const response = await axios.get("https://api.spacexdata.com/v4/launches/latest")
            setData(response.data)
        }
        catch {
            error =>
                console.log('error: ', error);
        }
    }
    return (
        <>
            {console.log('data: ', data)}
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">A New Beginning
                            <br className="hidden lg:inline-block" />A Step in to Future
                        </h1>
                        <p className="mb-2  leading-relaxed">A space program explores celestial bodies, conducts research, and advances technology for space exploration, benefiting humanity's scientific knowledge and progress. 🚀🌌🌠</p>
                        <h3 className="mb-2 font-bold leading-relaxed">Launch Date </h3>
                        <h3 className="mb-2 font-bold leading-relaxed text-green-400">Landing Attempt  {data.landing_attempt}</h3>
                        <h3 className="mb-2 font-bold leading-relaxed text-green-400">Landing Success  {data.landing_success}</h3>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <YTvideo videoId="5EwW8ZkArL4" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default SpaceLaunch;