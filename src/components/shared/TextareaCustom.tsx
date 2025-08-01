import { Textarea } from "@/components/ui/textarea"

interface TextareaCustomProps {
  value: string;
  onChange: (value: string) => void;
}

export function TextareaCustom({value, onChange}:TextareaCustomProps) {
  return <Textarea placeholder="Type your message here." value={value} onChange={(e)=>onChange(e.target.value)} />
}
