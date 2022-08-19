import { Component, Input, OnInit } from '@angular/core';
import { Device, Column } from '../../app.type';

@Component({
  selector: 'cs-table',
  templateUrl: './cs-table.component.html',
  styleUrls: ['./cs-table.component.scss']
})
export class CSTableComponent implements OnInit {

  @Input() rows: any;
  @Input() columns: any;
  @Input() gridOptions: any;

  public selectedItems: number = 0;
  public indeterminate: boolean | undefined;
  public openModal: boolean = false;
  public selectedDocs!: [];

  selectedDocsColumn: Column[] = [
    {
      headerName: 'Device', 
      field: 'device', 
      sortable: false, 
      width: 100,
      minWidth: 100,
      maxWidth: 150,
      action: 'view'
    },
    {
      headerName: 'Path', 
      field: 'path', 
      sortable: false, 
      width: 500,
      minWidth: 500,
      maxWidth: 550,
      action: 'view'
    },
  ]

  constructor() {

  }

  ngOnInit(): void {
    if (this.gridOptions && this.gridOptions.checkboxSelection) {
      this.updateCheckBoxes(false);
    }
  }

  getStyles(column: Column): {} {
    let styles = {
      'width.px': column?.width || null,
      'min-width.px': column?.minWidth || null,
      'max-width.px': column?.maxWidth || null
    }
    return styles;
  }

  selectColumn(row: Device, event: any): Device {
    if (event && event.srcElement) {
      if (event.srcElement.checked) {
        row.selected = true;
        this.selectedItems++;
      } else {
        row.selected = false;
        this.selectedItems--;
      }
    }
    this.indeterminate = (this.rows.length === this.selectedItems || this.selectedItems === 0) ? false : true;
    return row;
  }

  selectAllColumn(event: any): void {
    if (event && event.srcElement) {
      if (event.srcElement.checked) {
        this.updateCheckBoxes(true);
      } else {
        this.updateCheckBoxes(false);
      }
    }
  }

  getDocuments(event: Event): void {
    if (event) {
      this.openModal = true;
      this.selectedDocs = this.rows.filter((row: Device) => {
        if (row.selected && row.status === 'available') {
          return row;
        }
        return;
      });
    }
  }

  onClose(event: { focus: boolean; }): void {
    if (event && event?.focus) {
      this.openModal = false;
    }
  }

  private updateCheckBoxes(val: boolean): void {
    this.rows = this.rows.map((row: Device) => {
      row.selected = val;
      return row;
    });
    this.selectedItems = val ? this.rows.length : 0;
  }
}
