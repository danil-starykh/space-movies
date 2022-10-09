import { useMemo, useState } from "react";


export function useCalculateCountOfPages(totalMoviesCount: number, pageLimit = 20): number {
  const [countOfPages, setCountOfPages] = useState<number>(1);
  
  useMemo(() => {
    setCountOfPages((totalMoviesCount + pageLimit - 1) / pageLimit);
  }, [totalMoviesCount, pageLimit]);

  return Math.round(countOfPages);
}