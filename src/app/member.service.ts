import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, map } from 'rxjs';
import { Member } from './member';
import { MEMBERS } from './mock-members';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private membersUrl = 'api/members';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.membersUrl)
      .pipe(
        tap(),
        catchError(this.handleError<Member[]>('getMembers', []))
      );
  }

  updateMember(member: Member): Observable<any> {
    return this.http.put(this.membersUrl, member, this.httpOptions)
      .pipe(
        tap(_ => this.log(`${member.name} さんの情報を変更しました`)),
        catchError(this.handleError<any>('updateMember'))
      );
  }

  addMember(member: Member): Observable<Member> {
    return this.http.post<Member>(this.membersUrl,member,this.httpOptions)
      .pipe(
        tap((newMember: Member) => this.log(`${member.name} さんを追加しました`)),
        catchError(this.handleError<Member>('addMember'))
      );
  }

  deleteMember(member: Member | undefined): Observable<Member> {
    const id = member?.id;
    const url = `${this.membersUrl}/${id}`;

    return this.http.delete<Member>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`${member?.name} さんを削除しました`)),
        catchError(this.handleError<Member>('deleteMember'))
      )
  }
  private log(message: string) {
    this.messageService.add(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} 失敗: ${error.message}`);

      return of(result as T);
    }
  }

  // deleteMember(member: Member): Observable<Member> {
  //   const id = member.id;
  // }
}
