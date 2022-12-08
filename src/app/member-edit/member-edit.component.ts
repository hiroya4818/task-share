import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef, OnChanges } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { COLORS } from '../mock-color';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit, OnChanges {
  @Input() member?: Member;
  @Output() selectClear = new EventEmitter();
  @Output() memberUpdate = new EventEmitter();
  colors = COLORS;
  oldMemberData: Member | undefined;

  constructor(
    private memberService: MemberService,
    public changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    // this.selectClear.emit();
    this.memberUpdate.emit();
    this.changeDetectorRef.detectChanges();
    console.log('change');
  }

  goBack(): void {
    // this.member = undefined;
    this.selectClear.emit();
    this.changeDetectorRef.detectChanges();
  }

  save(): void {
    if(this.member){
      this.memberService.updateMember(this.member)
        .subscribe(any => this.selectClear.emit());
    }
  }

}
