import React, { useRef } from 'react'
import Slider from './Slider'

export default function Carousel() {
    const slider = useRef(null);
    const prevBtn = () => {
        let width =  slider.current.clientWidth;
        slider.current.scrollLeft -= width;
        console.log(width);
    }
    const nextBtn = () => {
        let width =  slider.current.clientWidth;
        slider.current.scrollLeft += width;
        console.log(width);
    }
    return (
        <div className=' relative h-[25rem] p-5'>
            <button onClick={prevBtn} className=' bg-zinc-500 px-2.5 py-1 rounded-full text-white'>&lt;</button>
            <button onClick={nextBtn} className=' bg-zinc-500 px-2.5 py-1 rounded-full text-white'>&gt;</button>
            <div ref={slider} className=' flex gap-4 h-[85%] overflow-x-hidden scroll-smooth'>
                <Slider number='1' />
                <Slider number='2' />
                <Slider number='3' />
                <Slider number='4' />
                <Slider number='5' />
                <Slider number='6' />
                <Slider number='7' />
                <Slider number='8' />
                <Slider number='9' />
                <Slider number='10' />
                <Slider number='11' />
                <Slider number='12' />
            </div>
        </div>
    )
}
