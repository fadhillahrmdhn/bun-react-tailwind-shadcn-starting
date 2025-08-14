import { useMemo, useState, useCallback } from 'react';
import type { DragonballItem, DragonballResponse } from '@/interfaces';
import { SearchBar, ButtonTheme } from '@/components/shared';
import { Skeleton } from '@/components/ui/skeleton';
import { api } from '@/lib/api';
import { columns } from './columns';
import { DataTable } from './data-table';
import { useQuery } from '@tanstack/react-query';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

import type { Limit } from '@/types';
import { toast } from 'sonner';

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
      toast.error('Error fetching Dragonball data', {
        description: 'Please try again later.',
      });
      throw error;
    }
  }, [page, limit]);

  const { isPending, isError, data, error} = useQuery({
    queryKey: ['characters', page, limit],
    queryFn: getDragonballData,
    retry: false,
  });

  const filteredCharacters = useMemo(() => {
    return (data?.items ?? []).filter((char: DragonballItem) => char.name.toLowerCase().includes(search.toLowerCase())).sort((a, b) => a.id - b.id);
  }, [search, data]);

  const totalPages = data?.meta?.totalPages ?? 1;
  const currentPage = data?.meta?.currentPage ?? 1;

  const handlePreviousPage = (): void => {
    setPage((page) => Math.max(page - 1, 1));
  };

  const handleNextPage = (): void => {
    setPage((page) => Math.min(page + 1, totalPages));
  };

  const handlePageClick = (pageNumber: number): void => {
    setPage(pageNumber);
  };

  return (
    <div className="grid grid-cols-1 gap-10">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-0">
        <ButtonTheme />
        {/* <SearchBar search={search} setSearch={setSearch} /> */}
      </div>

      {isPending ? (
        <div className="space-y-2">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      ) : filteredCharacters.length > 0 ? (
        <div className="">
          <DataTable columns={columns} data={data?.items ?? []} />
        </div>
      ) : (
        <DataTable columns={columns} data={[]} />
      )}
      <Pagination>
        <PaginationContent>
          <PaginationItem className={currentPage === 1 ? 'pointer-events-none opacity-40' : 'cursor-pointer'}>
            <PaginationPrevious onClick={handlePreviousPage} />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i} className="cursor-pointer">
              <PaginationLink onClick={() => handlePageClick(i + 1)} isActive={currentPage === i + 1}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem> */}

          <PaginationItem className={currentPage === totalPages ? 'pointer-events-none opacity-40' : 'cursor-pointer'}>
            <PaginationNext onClick={handleNextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
