import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo({  value, onChange}:{  value: string; onChange: (value: string) => void; }) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]" >
        <SelectValue  placeholder="Select a gender" />
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
