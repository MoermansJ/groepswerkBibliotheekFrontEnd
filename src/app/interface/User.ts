import BorrowedBook from './BorrowedBook';

export default interface User {
  id: number;
  email: string;
  token: string;
  admin: boolean;
  borrowedBookList: BorrowedBook[];
}
