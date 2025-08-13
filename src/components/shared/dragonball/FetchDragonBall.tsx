import { useMemo, useState, useCallback } from 'react';
import type { DragonballItem, DragonballResponse } from '@/interfaces';
import { SearchBar, ButtonTheme } from '@/components/shared';
import { Skeleton } from "@/components/ui/skeleton"
import { api } from '@/lib/api';
import { columns } from './columns';
import { DataTable } from './data-table';
import { useQuery } from '@tanstack/react-query';

import type { Limit } from '@/types';

export const DragonBall = () => {
  const [search, setSearch] = useState<string>('');
  const [limit, setLimit] = useState<Limit>('10');
  const [page, setPage] = useState<number>(1);

  const getDragonballData = useCallback(async (): Promise<DragonballResponse> => {
    const fallback: DragonballResponse = {
      items: [],
      meta: {
        totalItem: 0,
        itemCount: 0,
        itemsPerPage: Number(limit),
        totalPages: 0,
        currentPage: page,
      },
      links: {
        first: '',
        prev: '',
        next: '',
        last: '',
      },
    };
    try {
      const response = await api.get<DragonballResponse>('/characters', {
        params: {
          limit,
          page,
        },
      });
      return response.data || fallback;
    } catch (error) {
      console.error('Error fetching Dragonball data:', error);
      return fallback;
    } 
  }, [page, limit]);

  const { isPending, isError, data, error, isLoading } = useQuery({
    queryKey: ['characters', page, limit],
    queryFn: getDragonballData,
  });

  const filteredCharacters = useMemo(() => {
    return (data?.items ?? []).filter((char: DragonballItem) => char.name.toLowerCase().includes(search.toLowerCase())).sort((a, b) => a.id - b.id);
  }, [search, data]);

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-0">
        <ButtonTheme />
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      {isPending && !data ? (
        <div className="space-y-2">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      ) : filteredCharacters.length > 0 ? (
        <DataTable columns={columns} data={filteredCharacters} />
      ) : (
        <div className="text-center p-4">
          <p>No characters found.</p>
        </div>
      )}
    </div>
  );
};
