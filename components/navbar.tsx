"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SteinProgramsLogo from "./logo/layout"
import { Button } from "./ui/button";
import { Globe, Wallet } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "./ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import React from "react";
import { connect } from "./server/functions";


export default function Navbar() {
    const isConnected: boolean = false;
    const [broker, setBroker] = React.useState("kraken")
    const [waiting, setWaiting] = React.useState(false)
    const [apiKey, setApiKey] = React.useState("")
    const [secretKey, setSecretKey] = React.useState("")


    return (
        <div className="w-full grid-rows-1 flex items-center justify-between px-8 h-12">
            <SteinProgramsLogo></SteinProgramsLogo>
            {
                !isConnected ?
                    <Dialog>
                        <DialogTrigger>
                            <div className=
                                "bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 flex inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                            >
                                <Globe className="mr-2 h-4 w-4" />
                                Connect Broker
                            </div>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Select broker and connect your api keys</DialogTitle>
                                <DialogDescription>
                                    Contact us if you want to add a broker
                                </DialogDescription>
                                <Select onValueChange={setBroker}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Choose your broker" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="kraken">Kraken</SelectItem>
                                        <SelectItem value="binance">Binance</SelectItem>
                                    </SelectContent>
                                </Select>
                            </DialogHeader>
                            <Input placeholder="API key" value={apiKey}/>
                            <Input placeholder="SECRET key" />
                            <Button onClick={async () => {
                                setWaiting(true);
                                await connect(broker);
                                setWaiting(false);
                            }}
                            >
                                {waiting ? "Connecting..." : "Connect"}
                            </Button>
                        </DialogContent>
                    </Dialog>

                    :
                    <Avatar>
                        <AvatarImage src="https://github.com/hugodemenez.png" />
                        <AvatarFallback>HD</AvatarFallback>
                    </Avatar>
            }
        </div>
    )
}
