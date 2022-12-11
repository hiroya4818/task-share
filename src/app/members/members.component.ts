import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';
import { COLORS } from '../mock-color';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[] | undefined;
  selectedMember?: Member;
  colors = COLORS;

  constructor(
    private memberService: MemberService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getMembers();
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
  }

  deleteMember(member: Member):void {
    this.members = this.members?.filter(selfMember => selfMember !== member);
    this.memberService.deleteMember(member).subscribe();
    if(member === this.selectedMember) this.selectedMember = undefined;
    // this.memberService.deleteMember(member).subscribe();
  }

  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => this.members = members);
  }

  selectClear(): void {
    this.selectedMember = undefined;
    this.getMembers();
  }

  add(name: string, color: string): void {
    name = name.trim();
    if(!name) { return;}
    this.memberService.addMember({ name, color} as Member)
      .subscribe((member: Member) => {
        this.members?.push(member);
      });
  }
}
