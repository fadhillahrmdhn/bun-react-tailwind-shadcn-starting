import { useMemo, useState, useCallback, useEffect } from 'react';
import type { GetAllUserResponse, UserEntity } from '@/interfaces';
import { SearchBar, ButtonTheme } from '@/components/shared';
import { Skeleton } from '@/components/ui/skeleton';
import { api } from '@/lib/api';
import { columnsUser } from './columns';
import { DataTableUsers } from './data-table';
import { useQuery } from '@tanstack/react-query';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { useUserStore } from '@/store/useUserStore';

import { toast } from 'sonner';
import { get } from 'react-hook-form';

export const AllUsers = () => {
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  const getAllUsersData = useCallback(async (): Promise<GetAllUserResponse> => {
    const { getUsers } = useUserStore();
    const fallback: GetAllUserResponse = {
      message: '',
      statusCode: 200,
      timestamp: new Date().toISOString(),
      data: {
        entities: [],
        meta: {
          page: 1,
          limit: 10,
          totalItems: 0,
          totalPages: 0,
        },
      },
    };

    try {
      const response = await getUsers(page, limit);
      return response || fallback;
    } catch (error) {
      console.error('Error fetching User data:', error);
      throw error;
    }
  }, [page, limit]);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['users', page, limit],
    queryFn: getAllUsersData,
  });

  useEffect(() => {
    if (isError) {
      toast.error('Error fetching User data', {
        description: 'Please try again later.',
      });
    }
  }, [isError]);

  const totalPages = data?.data?.meta?.totalPages ?? 1;
  const currentPage = data?.data?.meta?.page ?? 1;

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
      </div>

      {isPending ? (
        <div className="space-y-2">
          <Skeleton className="h-12 w-xs md:w-2xl" />
          <Skeleton className="h-64 w-xs md:w-2xl" />
        </div>
      ) : (
        <div>
          <DataTableUsers columns={columnsUser} data={data?.data?.entities ?? []} />
        </div>
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
          <PaginationItem className={currentPage === totalPages ? 'pointer-events-none opacity-40' : 'cursor-pointer'}>
            <PaginationNext onClick={handleNextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
