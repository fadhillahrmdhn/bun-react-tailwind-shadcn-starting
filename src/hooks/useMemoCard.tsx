import { Input } from '@/components/ui/input';
import { useEffect, useMemo, useState } from 'react';
import type { Character } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { DragonBallCharacterCard, SearchBar, ButtonTheme } from '@/components/shared';

export const UseMemoCard = () => {
  const [search, setSearch] = useState<string>('');
  const [character, setCharacter] = useState<Character[]>([]);
  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters')
      .then((response) => response.json())
      .then((data) => {
        setCharacter(
          data.items.map((item: Character) => ({
            id: item.id,
            name: item.name,
            ki: item.ki,
            race: item.race,
            gender: item.gender,
            image: item.image,
          }))
        );
      });
  }, []);
  const filteredCharacters = useMemo(() => {
    return character.filter((char: Character) => char.name.toLowerCase().includes(search.toLowerCase())).sort((a, b) => a.name.localeCompare(b.name));
  }, [search, character]);

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-0">
        <ButtonTheme />
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      {filteredCharacters.length > 0 ? (
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
