import BorrowedBook from './BorrowedBook';

export default interface User {
  id: number;
  email: string;
  password: string;
  token: string;
  admin: boolean;
  borrowedBookList: BorrowedBook[];
}
