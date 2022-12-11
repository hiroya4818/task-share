import { Injectable } from '@angular/core';
import { Item } from './Item';
import { ITEMS } from './mock-items';
import { catchError, Observable, of, pipe, tap } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private itemsUrl = 'api/items';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl)
      pipe(
        tap(),
        catchError(this.handleError<any>('updateMember'))
      );
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl,item,this.httpOptions)
      .pipe(
        tap(_ => this.log(`${item.taskName} タスクを追加しました`)),
        catchError(this.handleError<Item>('addItem'))
      )
  }

  deleteItem(item: Item, state: string):  Observable<Item> {
    const url = `${this.itemsUrl}/${item.id}`;
    const viewState = state === 'delete'? '削除':'達成';

    return this.http.delete<Item>(url,this.httpOptions)
      .pipe(
        tap(_ => this.log(`${item?.taskName} タスクを${viewState}しました`),),
        catchError(this.handleError<any>('deleteItem'))
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
}
