"use server"

import { cookies } from "next/headers"
import { getPanelElement } from "react-resizable-panels";

export async function getCookies(){
    console.log("Resizing")

}


export async function connect(broker:string){
    console.log(broker)
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            console.log(broker);
            resolve();
        }, 2000); // Delay of 2 seconds
    });
}