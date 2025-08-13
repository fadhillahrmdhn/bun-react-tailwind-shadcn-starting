import { createFileRoute } from '@tanstack/react-router'
import { UseMemoCard } from '@/components/shared';

export const Route = createFileRoute('/characters')({
  component: Character,
})

function Character() {
  return (
    <UseMemoCard />
  )
}