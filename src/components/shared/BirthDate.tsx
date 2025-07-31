import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface BirthDateProps {
  id: string
  value: Date | undefined
  onChange: (date: Date | undefined) => void
}

export function BirthDate({ id, value, onChange }: BirthDateProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" id={id} className="w-full justify-between font-normal">
          {value ? value.toLocaleDateString('en-CA') : "Select date"}
          <ChevronDownIcon className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          captionLayout="dropdown"
          onSelect={(newDate: Date | undefined) => {
            onChange(newDate)
            setOpen(false)
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
