import { Input } from '@/components/ui/input';

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export const SearchBar = ({ search, setSearch }: SearchBarProps) => {
  return (
    <div className="flex flex-col gap-10">
      <Input className='bg-white dark:bg-gray-800 w-full lg:w-3/4 self-end' type="text" placeholder="Search characters..." value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}
