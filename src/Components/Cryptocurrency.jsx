import axios from "axios";
import { useEffect, useState } from "react";

const Cryptocurrency = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        // const fetchData = () => {
        const fetchData = async () => {
            try {
                // const response = axios.get("https://api.coinlore.net/api/tickers/")
                const response = await axios.get("https://api.coinlore.net/api/tickers/")
                setData(response.data.data)
            }
            catch {
                (error) => {
                    console.log('error: ', error);
                }
            }
        }
        fetchData();
    }, [])
    return (
        <>
            <div className=" mx-auto container relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Cryptocurrency
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rank
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Symbol
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price in USD
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price in btc
                            </th>
                        </tr>
                    </thead>
                    {data.map((item, index) => {
                        return (
                            <tbody key={index}>


                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.rank}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.symbol}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.price_usd} $
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.price_btc}
                                    </td>
                                </tr>

                            </tbody>
                        )
                    })}
                </table>
            </div>

        </>
    );
};

export default Cryptocurrency;