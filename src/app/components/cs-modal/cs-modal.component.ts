import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'cs-modal',
  templateUrl: './cs-modal.component.html',
  styleUrls: ['./cs-modal.component.scss']
})
export class CSModalComponent implements OnInit {

  constructor() {

  }

  @Input() size: string = 'md';
  @Input() rowData: any = [];
  @Input() columns: any = [];
  @Output() close = new EventEmitter<{focus: boolean}>();
  
  ngOnInit(): void {
  }

  onClose(event: Event) :void{
    if(event){
        this.close.emit({focus: true})
    }
  }
}
