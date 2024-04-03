import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Pagination() {
    const [data, setData] = useState([]);
    const [totalPage, setTotalPage] = useState(1);
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        const handleData = async () => {
            const response = await axios.get(`http://localhost:4000/?page=${counter}`);
            setData(response.data.data);
            setTotalPage(response.data.count);
        }
        handleData();
    }, [counter]);
    return (
        <div>
            <div className=' flex flex-col p-4 gap-4'>
                {data.map((item, i) => (
                    <div key={i} className=' flex gap-4'>
                        <div>{i + 1}</div>
                        <div>
                            <div>{item.title}</div>
                            <div>{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className=' flex flex-row p-4 gap-4'>
                <button onClick={() => setCounter(counter => (counter == 1 ? Math.ceil(totalPage / 2) : counter - 1))} className=' px-3 py-2 flex justify-center items-center bg-slate-600 text-white rounded-md'>&lt;</button>
                {[...Array(Math.ceil(totalPage / 2))].map((_, i) => (
                    <div key={i}>
                        <div onClick={() => setCounter(i + 1)} className={`${counter == (i + 1) ? " bg-slate-500 text-white" : ""} px-3 py-2 flex justify-center items-center hover:text-black hover:bg-slate-300 rounded-full`}>{i + 1}</div>
                    </div>
                ))}
                <button onClick={() => setCounter(counter => (counter >= Math.ceil(totalPage / 2) ? 1 : counter + 1))} className=' px-3 py-2 flex justify-center items-center bg-slate-600 text-white rounded-md'>&gt;</button>
            </div>
        </div>
    )
}
