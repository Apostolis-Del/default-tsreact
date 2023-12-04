export interface RowData {
    name: string;
    position: string;
    office: string;
    age: string;
    start_date: string;
    salary: string;
  }
  
  export interface DataTable {
    columns: Array<string | { label: string; field: string }>;
    rows: RowData[];
  }