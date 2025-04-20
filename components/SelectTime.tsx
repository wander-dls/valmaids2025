/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useState } from "react"



const SelectTime = () => {
    const [time, setTime] = useState("")
    return (
        <Select name="name" onValueChange={setTime} defaultValue="what time range">
            <SelectTrigger className="w-full">
                <SelectValue placeholder="what time range" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="9:00am-10:00am">9:00am-10:00am</SelectItem>
                <SelectItem value="11:00am-noon">11:00am-noon</SelectItem>
                <SelectItem value="noon-1:00pm">noon-1:00pm</SelectItem>
                <SelectItem value="1:00pm-2:00pm">1:00pm-2:00pm</SelectItem>
                <SelectItem value="3:00pm-4:00pm">3:00pm-4:00pm</SelectItem>
                <SelectItem value="4:00pm-5:00pm">4:00pm-5:00pm</SelectItem>
                <SelectItem value="5:00pm-6:00pm">5:00pm-6:00pm</SelectItem>
                <SelectItem value="after hours">after hours</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default SelectTime