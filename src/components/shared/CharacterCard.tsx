import { use, useEffect, useState } from 'react';
import type { Character } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../ui/card';

export const DragonBallCharacterCard = () => {
  const [character, setCharacter] = useState<Character[]>([]);
  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters')
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data.items.map((item: Character) => ({
          id: item.id,
          name: item.name,
          ki: item.ki,
          race: item.race,
          gender: item.gender,
          image: item.image
        })));
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {character.map((char) => (
        <Card key={char.id} className="items-center p-4 text-center">
          <CardHeader className="p-2">
            <img src={char.image} alt={char.name} className="w-full h-40 object-contain rounded-t-lg" />
            <CardTitle className='text-xl'>{char.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col p-1 text-justify">
            <CardDescription>Ki: {char.ki}</CardDescription>
            <CardDescription>Race: {char.race}</CardDescription>
            <CardDescription>Gender: {char.gender}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
