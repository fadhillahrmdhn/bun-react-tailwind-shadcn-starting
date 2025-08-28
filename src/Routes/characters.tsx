import { createFileRoute } from '@tanstack/react-router'
import { DragonBall } from '@/components/shared';

export const Route = createFileRoute('/characters')({
  component: Character,
})

function Character() {
  return (
    <DragonBall />
  )
}