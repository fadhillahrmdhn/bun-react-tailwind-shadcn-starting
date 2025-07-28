import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarCustom({ src }: { src: string }){
  return (
    <div>
      <Avatar className="w-24 h-24">
        <AvatarImage src={src} alt="@shadcn" />
        <AvatarFallback>img</AvatarFallback>
      </Avatar>
    </div>
  )
}
