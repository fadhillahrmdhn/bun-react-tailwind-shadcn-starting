import { createFileRoute } from '@tanstack/react-router';
import { UseMemoCard } from '@/hooks/useMemoCard';

export const Route = createFileRoute('/card')({
  component: CardPage,
});

function CardPage() {
  return (
    <UseMemoCard />
  );
}