import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  item? = {
    name: '飲食代',
    payment: 1000,
    paymentName: '福田',
    color: 'red'
  };

  items? = [
    {
      name: '飲食代',
      payment: 1000,
      paymentName: '福田',
      color: 'red'
    },
    {
      name: '飲食代',
      payment: 1000,
      paymentName: '福田',
      color: 'red'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
