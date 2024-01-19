import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Switch } from "@/components/ui/switch"


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OrderFrom() {
    const [buy, setBuy] = React.useState(true)
    return (
        <div className="flex flex-col md:p-8 gap-4">
            <Tabs defaultValue="buy">
                <TabsList>
                    <TabsTrigger value="buy">Buy</TabsTrigger>
                    <TabsTrigger value="sell">Sell</TabsTrigger>
                </TabsList>
            </Tabs>
                    <Input placeholder="Price"></Input>
                    <Accordion type="multiple" className="mb-2" defaultValue={['take-profit','stop-loss']}>
                        <AccordionItem value="take-profit">
                            <AccordionTrigger>
                                Take-Profit
                            </AccordionTrigger>
                            <AccordionContent className="flex gap-2 items-center">
                                <Switch /><Input placeholder="take-profit price"></Input>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="stop-loss">
                            <AccordionTrigger>Stop-Loss</AccordionTrigger>
                            <AccordionContent className="flex gap-2 items-center">
                                <Switch /><Input placeholder="stop-loss price"></Input>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="trailing-stop">
                            <AccordionTrigger>Trailing Stop</AccordionTrigger>
                            <AccordionContent className="flex gap-2 items-center">
                                <Switch /><Input placeholder="SL %"></Input>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Button className="ml-auto w-fit">Confirm</Button>

        </div>
    )
}