import { Book, Person } from './interfaces';

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };
export type myTuple = [title: string, author: string];
export type BookProperties = keyof Book;
export type PersonBook = Book & Person;
export type BookOrUndefined = Book | undefined;
