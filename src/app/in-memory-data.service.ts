import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Member } from './member';


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

    return { members };
  }

  genId(members: Member[]): number {
    return members.length > 0 ? Math.max(...members.map(member => member.id)) + 1 : 11;
  }
}
