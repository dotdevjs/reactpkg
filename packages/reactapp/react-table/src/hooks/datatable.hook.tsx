import { useCallback, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDataTable<T = any>() {
  const [totalRows, setTotalRows] = useState(0);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [toggleCleared, setToggleCleared] = useState(false);

  const handlePageChange = useCallback(
    (p: number) => {
      setPage(p);
    },
    [setPage]
  );

  const handlePerRowsChange = useCallback(
    async (newPerPage: number, page: number) => {
      setPerPage(newPerPage);
    },
    [setPerPage]
  );

  const handleRowSelected = useCallback(
    (state: {
      allSelected: boolean;
      selectedCount: number;
      selectedRows: T[];
    }) => {
      setSelectedRows(state.selectedRows);
    },
    [setSelectedRows]
  );

  return {
    totalRows,
    setTotalRows,
    page,
    setPage,
    perPage,
    setPerPage,
    selectedRows,
    setSelectedRows,
    toggleCleared,
    setToggleCleared,
    handlePageChange,
    handlePerRowsChange,
    handleRowSelected,
  };
}
