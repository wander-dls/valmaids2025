import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"



const SelectBeds = () => {
    return (
        <Select>
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