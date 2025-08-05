import { use, useEffect, useState } from 'react';
import type { Character } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../ui/card';

export const DragonBallCharacterCard = ({ char }: { char: Character }) => {
  return (
    <div>
        <Card key={char.id} className="items-center p-4 text-center dark:bg-gray-800">
          <CardHeader className="p-2">
            <img src={char.image} alt={char.name} className="w-full h-40 object-contain rounded-t-lg" />
            <CardTitle className='text-xl'>{char.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col p-1 text-justify">
            <CardDescription className='dark:text-gray-300'>Ki: {char.ki}</CardDescription>
            <CardDescription className='dark:text-gray-300'>Race: {char.race}</CardDescription>
            <CardDescription className='dark:text-gray-300'>Gender: {char.gender}</CardDescription>
          </CardContent>
        </Card>
    </div>
  );
};
