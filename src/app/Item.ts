import { Member } from './member';
export interface Item {
  id:number;
  taskName: string;
  detail: string;
  manager?: Member;
  progress?: string;
}
