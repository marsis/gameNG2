import { Component, OnInit } from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'block',
  templateUrl: 'block.component.html',
  styleUrls: ['block.component.css']
})
export class BlockComponent implements OnInit {

  @Input() item: any;
  @Input() life: number;

  @Output() remove = new EventEmitter();

  constructor() {
  }

  openCard(){
    this.item.isOpen = true;
    this.remove.emit({item: this.item});

  }





  ngOnInit() {
  }
}















