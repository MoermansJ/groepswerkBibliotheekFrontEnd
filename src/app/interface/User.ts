import BorrowedBook from './BorrowedBook';

export default interface User {
  id: number;
  email: string;
  password: string;
  isAdmin: boolean;
  borrowedBookList: BorrowedBook[];
}
