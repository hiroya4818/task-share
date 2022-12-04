import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  items: Item[] = [
    {
      name: '食べ物代',
      payment: 1000,
      paymentName: '福田',
    },
    {
      name: '飲み物代',
      payment: 500,
      paymentName: 'ふくだ',
    }
  ];

  selectedItem?: Item;


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }

}
