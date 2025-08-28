export interface MetaInterface {
    totalItem: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}

export interface LinkInterface {
    first: string;
    prev: string;    
    next: string;
    last: string;
}
