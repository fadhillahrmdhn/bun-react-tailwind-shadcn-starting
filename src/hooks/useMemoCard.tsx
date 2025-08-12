import { useEffect, useMemo, useState } from 'react';
import type { DragonballItem, DragonballResponse } from '@/interfaces';
import { DragonBallCharacterCard, SearchBar, ButtonTheme } from '@/components/shared';
import { SkeletonCard } from '@/components/shared';
import { api } from '@/lib/api';

export const UseMemoCard = () => {
  const [search, setSearch] = useState<string>('');
  const [dragonball, setDragonball] = useState<DragonballResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getDragonballData = async (): Promise<void> => {
    try {
      const response = await api.get<DragonballResponse>('/characters');
      const dragonballData = response.data;
      if (dragonballData) {
        setDragonball(dragonballData);
      }
    } catch (error) {
      console.error("Error fetching Dragonball data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDragonballData();
  }, []);
  const filteredCharacters = useMemo(() => {
    return (dragonball?.items ?? []).filter((char: DragonballItem) => char.name.toLowerCase().includes(search.toLowerCase())).sort((a, b) => a.name.localeCompare(b.name));
  }, [search, dragonball]);

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-0">
        <ButtonTheme />
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : filteredCharacters.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredCharacters.map((char) => (
            <DragonBallCharacterCard key={char.id} char={char} />
          ))}
        </div>
      ) : (
        <div className="text-center p-4">
          <p>No characters found.</p>
        </div>
      )}
    </div>
  );
};
