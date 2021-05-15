/* eslint-disable @typescript-eslint/no-explicit-any */
import lodash from 'lodash';
import React, {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Button } from 'react-bootstrap';
import DataTable, { IDataTableColumn } from 'react-data-table-component';
import { useBus } from 'react-bus';

export interface ReactTableProps {
  dataProvider(params: FetchDataParams): any;

  columns: IDataTableColumn[];
  callbacks?: Record<string, (...args: any) => void>;
  actions?: ReactElement;
  title?: string;
}

export interface FetchDataParams {
  page?: number;
  limit?: number;
}

export interface TableRow {
  resource: Record<string, any>;
  type: 'path' | 'record';
}

export enum ReactTableEvents {
  fetchData = 'FETCH_DATA',
  deleteItem = 'DELETE_ITEM',
  deleteItems = 'DELETE_ITEMS',
  pageChanged = 'PAGE_CHANGED',
  perPageChanged = 'PER_PAGE_CHANGED',
}

export const ReactTable: React.FC<ReactTableProps> = (
  props: ReactTableProps
) => {
  const bus = useBus();
  const [loading, setLoading] = useState(false);
  const [items, setData] = useState<TableRow[]>([]);
  const [totalRows, setTotalRows] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const [sort, setSort] = useState({});

  const triggerCallback = (...args: any) => {
    const name = args.shift();
    return lodash.get(props.callbacks, name, () => {
      console.log('TRIGGER CALLBACK ' + name);
    })(...args);
  };

  const fetchDataParams: FetchDataParams = {
    page: currentPage,
    limit: perPage,
  };

  const fetchData = async (params: FetchDataParams = {}) => {
    params = { ...fetchDataParams, ...params };
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const data = await props.dataProvider(params);
      setData(data);
      setTotalRows(data.length);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = async (page: number) => {
    setCurrentPage(page);
    await triggerCallback(ReactTableEvents.pageChanged, fetchDataParams);
  };

  const handlePerRowsChange = async (newPerPage: number, page: number) => {
    setPerPage(newPerPage);
    await fetchData();
    //await triggerCallback(ReactTableEvents.perPageChanged, fetchDataParams);
  };

  const handleRowSelected = useCallback((state: any) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const handleSort = async (column: any, sortDirection: any) => {
    setSort({ column: column.selector, type: sortDirection });
    await fetchData();
  };

  const handleUpdateItem = async (row: TableRow) => {
    // history.push(formatRoute(FORM_TEMPLATE_ROUTES.EDIT, { id: row.id }));
  };

  const handleDeleteItems = async (rows: TableRow[]) => {
    bootbox.confirm({
      message: 'Confirm',
      callback: async (result: boolean) => {
        if (!result) {
          return;
        }

        try {
          setToggleCleared(!toggleCleared);
          await triggerCallback(ReactTableEvents.deleteItems, rows);
          await fetchData();
        } catch (e) {
          console.error(e);
        }
      },
    });
  };

  const contextActions = useMemo(() => {
    return (
      <Button
        variant="danger"
        size="sm"
        onClick={() => handleDeleteItems(selectedRows)}
      >
        <i className="fa fa-remove" /> Delete
      </Button>
    );
  }, []);

  useEffect(() => {
    (async () => await fetchData())();

    bus.on(ReactTableEvents.fetchData, fetchData);

    return () => {
      bus.off(ReactTableEvents.fetchData, fetchData);
    };
  }, []);

  return (
    <DataTable
      title={props.title}
      columns={props.columns}
      data={items}
      progressPending={loading}
      highlightOnHover
      pointerOnHover
      actions={props.actions}
      contextActions={contextActions}
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={toggleCleared}
      // selectableRowsComponent={Checkbox}
      selectableRows
      onSort={handleSort}
      // sortServerpagination
      pagination
      paginationServer
      paginationTotalRows={totalRows}
      paginationPerPage={perPage}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
    />
  );
};

export default ReactTable;

// import React from 'react';
//
// import './form-template-crud-table.scss';
//
// /* eslint-disable-next-line */
// export interface ReactTableProps {}
//
// export function FormTemplateCrudTable(props: FormTemplateCrudTableProps) {
//   return (
//     <div>
//       <h1>Welcome to form-template-crud-table!</h1>
//     </div>
//   );
// }
//
// export default FormTemplateCrudTable;

// TODO: bug first load check all selected
// useEffect(() => {
//   console.log(123);
//   if (totalRows > 0) {
//     return;
//   }
//
//   setToggleCleared(true);
// }, [selectedRows]);
