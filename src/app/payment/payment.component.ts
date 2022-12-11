import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  items?: Item[];

  selectedItem?: Item;
  members?: Member[];



  constructor(
    private memberService: MemberService,
    private paymentService: PaymentService
  ) { }

  ngOnInit(): void {
    this.getItems();
    this.getMembers();
  }

  addItem(taskName: string, detail: string): void {
    taskName = taskName.trim();
    detail = detail.trim();
    let manager: Member = {color: 'white'} as Member;
    if(!taskName || !detail) {
      console.log('AAA');
      return;
    }
    this.paymentService.addItem({taskName,detail,manager} as Item)
      .subscribe((item: Item) => {
        this.items?.push(item);
        this.selectedItem = undefined;
        console.log(this.items);
      });
    this.getItems();

  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  deleteItem(item: Item): void {
    this.items = this.items?.filter(selfItem => selfItem !== item);
    this.paymentService.deleteItem(item, 'delete').subscribe();
    if(item === this.selectedItem) this.selectedItem = undefined;
  }

  achiveItem(item: Item): void {
    this.items = this.items?.filter(selfItem => selfItem !== item);
    this.paymentService.deleteItem(item,'achive').subscribe();
    if(item === this.selectedItem) this.selectedItem = undefined;
  }



  getItems(): void {
    this.paymentService.getItems()
      .subscribe(items => this.items = items);
  }

  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => this.members = members);
  }



}
