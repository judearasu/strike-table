export interface Device {
    name: string;
    device: string;
    path: string;
    status: string;
    selected?:boolean;
}

export interface Column {
    headerName: string;
    field: string;
    sortable: boolean;
    width: number;
    minWidth: number;
    maxWidth: number;
    action?: string;
}