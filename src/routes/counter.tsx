import { createFileRoute } from '@tanstack/react-router';
import { CounterZustand } from '@/components/shared';

export const Route = createFileRoute('/counter')({
  component: CounterPage,
});

function CounterPage() {
  return (
    <CounterZustand />
  );
}
