import { Input } from '@/components/ui/input';
import { useEffect, useMemo, useState } from 'react';
import type { Character } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { DragonBallCharacterCard } from './CharacterCard';
export const SearchBar = ( { search, setSearch }: { search: string; setSearch: (value: string) => void }) => {

  return (
    <div className="flex flex-col gap-10">
      <Input className='bg-white w-full lg:w-2/5 self-end' type="text" placeholder="Search characters..." value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}
