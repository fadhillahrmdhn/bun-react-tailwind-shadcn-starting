import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectDemoProps {
  value: string;
  onChange: (value: string) => void;
}

export function SelectDemo({  value, onChange}: SelectDemoProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]" >
        <SelectValue placeholder="Select a gender" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
            <SelectItem value="male" key="male">
              Male
            </SelectItem>
            <SelectItem value="female" key="female">
              Female
            </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
