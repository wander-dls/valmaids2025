/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useState } from "react"



const SelectBeds = () => {
    const [bed, setBed] = useState("")
    return (
        <Select name="bedrooms" onValueChange={e => setBed(e)}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="How many bedrooms" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="studio">studio</SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default SelectBeds