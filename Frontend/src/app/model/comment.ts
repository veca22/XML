import {User} from './user';
import {Ad} from './ad';

export class Comment {
  id: number;
  commenter: User;
  comment: string;
  approved: boolean;
  ad: Ad;

  constructor() {
  }
}
