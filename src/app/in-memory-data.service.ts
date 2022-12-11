import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Member } from './member';
import { Item } from './Item';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      { id: 11, name: '武山 岳大', color: 'red' },
      { id: 12, name: '駒倉 光紀', color: 'pink'},
      { id: 13, name: '長田 研太', color: 'brown'},
      { id: 14, name: '高藤 友梨香', color: 'purple' },
      { id: 15, name: '浜崎 貴之', color: 'blue' },
      { id: 16, name: '緑川 睦' , color: 'green' },
    ];

    const items = [
      {
        id: 1,
        taskName: '買い物',
        detail: '今日中に終わらせておきたい。予算は2000円で',
      },
      {
        id: 2,
        taskName: '皿洗い',
        detail: '洗剤が切れているのでついでに買い物も',
      }
    ];

    return { members, items };
  }

  genMemberId(members: Member[]): number {
    return members.length > 0 ? Math.max(...members.map(member => member.id)) + 1 : 11;
  }

  genItemId(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
  }
}
