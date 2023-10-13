import Book from './Book';
import User from './User';

export default interface BorrowedBook {
  id: number;
  book: Book;
  user: User;
  startDate: string;
  hasBeenExtended: boolean;
}
