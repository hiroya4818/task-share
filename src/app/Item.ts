import { Member } from './member';
export interface Item {
  taskName: string;
  detail: string;
  manager?: Member;
  progress?: string;
}
