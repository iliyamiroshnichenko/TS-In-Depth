/* eslint-disable no-redeclare */
showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ===============================================
// 02. Types Basics
// Task 02.01.4
enum Category {
    JAVASCRIPT = 'JavaScript',
    CSS = 'CSS',
    HTML = 'HTML',
    TYPESCRIPT = 'TypeScript',
    ANGULAR = 'Angular'
}
// Task 02.01.1, 02.01.5
type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
};

type myTuple = [title: string, author: string];

const getAllBooks = (): readonly Book[] => {
    const books =	<const>[
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JAVASCRIPT},
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JAVASCRIPT },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true , category: Category.CSS},
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JAVASCRIPT }
    ];
    return books;
};

// Task 02.01.2
const logFirstAvailable = (books: readonly Book[] = getAllBooks()) => {
    console.log('Количество книг в массиве ', books.length);
    const firstAvailableTitle = books.find(({ available }) => available)?.title || '';
    console.log('Название первой доступной книги ', firstAvailableTitle);
};
// Task 02.01.3
const allBooks = getAllBooks();
// logFirstAvailable(allBooks);
// Task 02.01.6
const getBookTitlesByCategory = (selectedCategory: Category = Category.JAVASCRIPT): Array<string> => allBooks.filter(({ category }) => category === selectedCategory).map(({ title }) => title);
// Task 02.01.7
const logBookTitles = (titles: string[]): void => console.log(titles);
const jsBooks = getBookTitlesByCategory(Category.JAVASCRIPT);
// logBookTitles(jsBooks);
// Task 02.01.8
const getBookAuthorByIndex = (bookId: number): myTuple => {
    const { title, author } = allBooks.find(({ id }) => bookId === id);
    const res: myTuple  = [title, author];
    return res;
};
// console.log(getBookAuthorByIndex(3));
// Task 02.01.10
const calcTotalPages = (): bigint => {
    const libs = <const>[  { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];

    return libs.reduce((acc, { books, avgPagesPerBook }) => acc + BigInt(books * avgPagesPerBook), BigInt(0));
};

// console.log(calcTotalPages());

// Task 03.01.01
const createCustomerID = (name: string, id: number): string => `${id}-${name}`;
// Task 03.01.02
let myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// Task 03.01.03
let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${id}-${name}`;
idGenerator = createCustomerID;
// console.log(idGenerator('Ann', 10));

// Task 03.02.01
const createCustomer = (name: string, age?: number, city?: string): void => {
    console.log(`Customer name ${name}`);
    if(age) console.log(`Customer age ${age}`);
    if(city) console.log(`Customer city ${city}`);
};
// createCustomer('Illia');
// createCustomer('Illia', 34);
// createCustomer('Illia', 34, 'Slovyansk');

// console.log(getBookTitlesByCategory());
// logFirstAvailable();
// Task 03.02.04
const getBookByID = (idToFind: number): Book => {
    const books = getAllBooks();
    return books.find(({id}) => id === idToFind);
};
// console.log(getBookByID(1));
// Task 03.02.05
const сheckoutBooks = (customer: string, ...bookIDs: number[]): string[] => {
    console.log(`Customer ${customer}`);
    return  bookIDs.map(getBookByID).filter(({available}) => available).map(({title}) => title);
};
const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);

// Task 03.03
function getTitles (author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();
    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter(({author}) => author === arg).map(({title}) => title);
        } else if (typeof arg === 'boolean') {
            return books.filter(({available}) => available === arg).map(({title}) => title);
        }

    } else if (args.length === 2) {
        const [id, available] = args;
        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.available === available && book.id === id).map(({title}) => title);
        }
    }
};
console.log(getTitles('Andrea Chiarelli'));
