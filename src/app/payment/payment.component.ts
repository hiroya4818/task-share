import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  items: Item[] = [
    {
      taskName: '買い物',
      detail: '今日中に終わらせておきたい。予算は2000円で',
    },
    {
      taskName: '皿洗い',
      detail: '洗剤が切れているのでついでに買い物も',
    }
  ];

  selectedItem?: Item;
  members?: Member[];



  constructor(
    private memberService: MemberService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getMembers();
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => this.members = members);
  }

}
