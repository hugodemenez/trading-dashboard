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
            autoSize: true,
            layout: {
                background: { type: ColorType.Solid, color: "transparent" },
                textColor: "#fff",
            },
            grid: {
                vertLines:{
                    visible: false
                },
                horzLines:{
                    visible: false
                }
            },
            width: chartContainerRef.current!.clientWidth,
            height: chartContainerRef.current!.clientHeight,
        });
        chartRef.current.timeScale().fitContent();



        const lineSeries = chartRef.current.addLineSeries();
        const fakeData = [
            { time: 1642427876, value: (10.63+9.49)/2 },
            { time: 1642514276, value:  (10.30+9.42)/2 },
            { time: 1642600676, value: (10.17+9.92)/2 },
            { time: 1642687076, value: 10 },
            { time: 1642773476, value: 10 },
            { time: 1642859876, value: 10 },
            { time: 1642946276, value: 10 },
            { time: 1643032676, value: 10 },
            { time: 1643119076, value: 10 },
            { time: 1643205476, value: 10 },
        ]
        lineSeries.setData(fakeData);

        const candlestickSeries = chartRef.current.addCandlestickSeries({ upColor: '#26a69a', downColor: '#ef5350', borderVisible: false, wickUpColor: '#26a69a', wickDownColor: '#ef5350' });

        const data = [
            { open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 },
            { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: 1642514276 },
            { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 },
            { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 },
            { open: 9.51, high: 10.46, low: 9.10, close: 10.17, time: 1642773476 },
            { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 },
            { open: 10.47, high: 11.39, low: 10.40, close: 10.81, time: 1642946276 },
            { open: 10.81, high: 11.60, low: 10.30, close: 10.75, time: 1643032676 },
            { open: 10.75, high: 11.60, low: 10.49, close: 10.93, time: 1643119076 },
            { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 }
        ];
        
        candlestickSeries.setData(data);


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
