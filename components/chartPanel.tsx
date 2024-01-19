"use client";

import React, { useRef, useEffect, useCallback } from 'react';
import { createChart, ColorType } from 'lightweight-charts';
import { ResizablePanel } from './ui/resizable';

const TradingChart = ({ data }: { data: any }) => {

    const chartContainerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<any>(null);

    // Define handleResize using useCallback
    const handleResize = useCallback(() => {
        if (chartContainerRef.current && chartRef.current) {
            chartRef.current.applyOptions({ 
                width: chartContainerRef.current.clientWidth,
                height: chartContainerRef.current.clientHeight
            });
        }
    }, []);
    useEffect(() => {
        handleResize();
        chartRef.current = createChart(chartContainerRef.current!, {
            layout: {
                background: { type: ColorType.Solid, color: "#000" },
                textColor: "#fff",
            },
            width: chartContainerRef.current!.clientWidth,
            height: chartContainerRef.current!.clientHeight,
        });
        chartRef.current.timeScale().fitContent();



        const lineSeries = chartRef.current.addLineSeries();
        const fakeData = [
            { time: '2019-04-11', value: 80.01 },
            { time: '2019-04-12', value: 96.63 },
            { time: '2019-04-13', value: 76.64 },
            { time: '2019-04-14', value: 81.89 },
            { time: '2019-04-15', value: 74.43 },
            { time: '2019-04-16', value: 80.01 },
            { time: '2019-04-17', value: 96.63 },
            { time: '2019-04-18', value: 76.64 },
            { time: '2019-04-19', value: 81.89 },
            { time: '2019-04-20', value: 74.43 },
        ]
        lineSeries.setData(fakeData);
        window.addEventListener('resize', handleResize);
        return () =>{
            window.removeEventListener('resize', handleResize);

            chartRef.current.remove();
        }
    }, [data]);

    return (
        <ResizablePanel defaultSize={75} order={1} id="chartpanel" onResize={handleResize} >
            <div ref={chartContainerRef} className='w-full h-full'/>;
        </ResizablePanel>
    )
};

export default TradingChart;
