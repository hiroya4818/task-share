import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../Item';

@Component({
  selector: 'app-payment-edit',
  templateUrl: './payment-edit.component.html',
  styleUrls: ['./payment-edit.component.css']
})
export class PaymentEditComponent implements OnInit {
  @Input() item?: Item;


  constructor() { }

  ngOnInit(): void {
  }

}
