import { Book, Logger, Author, Librarian, TOptions } from './interfaces';
import { PersonBook } from './types';
import {UL, RefBook, Library} from './classes';
import { createCustomerID, getBookTitlesByCategory, printRefBook, purge } from './functions';
import { Category } from './enums';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ===============================================
// 02. Types Basics
// Task 02.01.4
// Task 02.01.1, 02.01.5



// Task 02.01.2

// Task 02.01.3

// logFirstAvailable(allBooks);
// Task 02.01.6
// Task 02.01.7
const jsBooks = getBookTitlesByCategory(Category.JAVASCRIPT);
// logBookTitles(jsBooks);
// Task 02.01.8

// console.log(getBookAuthorByIndex(3));
// Task 02.01.10


// console.log(calcTotalPages());

// Task 03.01.01
// Task 03.01.02
let myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// Task 03.01.03
let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${id}-${name}`;
idGenerator = createCustomerID;
// console.log(idGenerator('Ann', 10));

// Task 03.02.01

// createCustomer('Illia');
// createCustomer('Illia', 34);
// createCustomer('Illia', 34, 'Slovyansk');

// console.log(getBookTitlesByCategory());
// logFirstAvailable();
// Task 03.02.04

// console.log(getBookByID(1));
// Task 03.02.05

// const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);

// Task 03.03

// console.log(getTitles('Andrea Chiarelli'));

// Task 03.04


// console.log(bookTitleTransform('Typescript'));
// console.log(bookTitleTransform(42));

// Task 04.01



const myBook: Book= {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason: string): void => {
        console.log(`Damaged: ${reason}`);
    }

};

// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04.02


// logDamage('missing back cover');

// Task 04.03

const favoriteAuthor: Author = {
    name: 'Illia',
    email: 'illiaExample@.com',
    numBooksPublished: 1
};

// const favoriteLibrarian: Librarian = {
//     name: 'Marina',
//     email: 'marinaExample@.com',
//     department: 'Classical',
//     assistCustomer: null,
// };

// Task 04.04
const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// Task 04.05

const logDamage: Logger = (reason: string): void => {
    console.log(`Damaged: ${reason}`);
};
// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

// Task 05.01


// const ref = new ReferenceItem(1,'Typescript', 2023);
// ref.printItem();
// ref.publisher = ('abc');
// console.log(ref);
// console.log(ref.getId());

// Task 05.02


// const refBook = new RefBook(1, 'Typescript', 2023, 2);
// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();

// Task 05.04


const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
favoriteLibrarian.name = 'Illia';
// favoriteLibrarian.assistCustomer('Marina', 'Learn Typescript');

// Task 05.05
// const personBook: PersonBook = {
//     author: 'Illia',
//     available: false,
//     category: Category.HTML,
//     email: 'illia@example.com',
//     id: 1,
//     title: 'Some title',
//     name: 'Illia'
// };



// const config: TOptions = {duration: 100};
// console.log(setDefaultConfig(config));

// Task 06.03
// printRefBook(new RefBook(1, 'Typescript', 2023, 2));
// printRefBook(new UL.UniversityLibrarian());

// Task 06.05
// const flag = false;

// if (flag) {
//     import('./classes').then(obj => {
//         const reader = new obj.Reader();
//         reader.name = 'Anna';
//         console.log(reader);
//     }).catch(err => console.error(err));
// }

// if (!flag) {
//     const obj = await import('./classes');
//     const reader = new obj.Reader();
//     reader.name = 'Anna';
//     console.log(reader);
// }

// Task 06.06
// let lib: Library = new Library();
// let lib: Library = {address: '', id: 1, name: 'Anna'};

// Task 07.01
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.SOFTWARE },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.SOFTWARE },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.SOFTWARE },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.SOFTWARE }
];
const r1: Book[] = purge<Book>(inventory);
console.log(r1);

const r2: number[] = purge<number>([1,2,3,4]);
console.log(r2);

