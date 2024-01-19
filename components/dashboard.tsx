"use client"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import ChartPanel from "@/components/chartPanel"
import OrderFrom from "./orderFrom"

export default function Dashboard(){
    return(
      <ResizablePanelGroup  direction="horizontal" className="h-full w-full">
        <ChartPanel data={null}/>
        <ResizableHandle withHandle/>
        <ResizablePanel defaultSize={25} order={2}>
          <OrderFrom/>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
}