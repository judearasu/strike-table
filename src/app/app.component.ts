import { Component } from '@angular/core';
import { Device, Column } from './app.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  columns: Column[] = [
    {
      headerName: '',
      field:'select',
      action: 'checkbox', 
      sortable: false, 
      width: 50,
      minWidth: 50,
      maxWidth: 70,
    },
    {
      headerName: 'Name', 
      field: 'name', 
      sortable: false, 
      width: 100,
      minWidth: 100,
      maxWidth: 150,
      action: 'view'
    },
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
    {
      headerName: 'Status', 
      field: 'status', 
      sortable: false, 
      width: 90,
      minWidth: 90,
      maxWidth: 150,
      action: 'badge'
    },
  ]

  deviceList: Device[] = [

    { name: 'smss.exe', device: 'Stark', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe', status: 'scheduled' },

    { name: 'netsh.exe', device: 'Targaryen', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe', status: 'available' },

    { name: 'uxtheme.dll', device: 'Lanniester', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll', status: 'available' },

    { name: 'cryptbase.dll', device: 'Martell', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll', status: 'scheduled' },

    { name: '7za.exe', device: 'Baratheon', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: 'scheduled' }

  ]
   
  defaultGridOptions = {
    headerCheckboxSelection: true,
    checkboxSelection : true
  }
  // Column
}
