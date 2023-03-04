import { Category } from './enums';
import { Book, Callback, LibMgrCallback, TOptions } from './interfaces';
import { BookProperties, BookOrUndefined, myTuple } from './types';
import RefBook from './classes/encyclopedia';

/* eslint-disable no-redeclare */
export const getAllBooks = (): readonly Book[] => {
    const books: readonly Book[] =	<const>[
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JAVASCRIPT},
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JAVASCRIPT },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true , category: Category.CSS},
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JAVASCRIPT }
    ];
    return books;
};

const allBooks = getAllBooks();

export const logFirstAvailable = (books: readonly Book[] = getAllBooks()) => {
    console.log('Количество книг в массиве ', books.length);
    const firstAvailableTitle = books.find(({ available }) => available)?.title || '';
    console.log('Название первой доступной книги ', firstAvailableTitle);
};

export const getBookTitlesByCategory = (selectedCategory: Category = Category.JAVASCRIPT): Array<string> => allBooks.filter(({ category }) => category === selectedCategory).map(({ title }) => title);
export const logBookTitles = (titles: string[]): void => console.log(titles);

export const getBookAuthorByIndex = (bookId: number): myTuple => {
    const { title, author } = allBooks.find(({ id }) => bookId === id);
    const res: myTuple  = [title, author];
    return res;
};

export const calcTotalPages = (): bigint => {
    const libs = <const>[  { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];

    return libs.reduce((acc, { books, avgPagesPerBook }) => acc + BigInt(books * avgPagesPerBook), BigInt(0));
};

export const createCustomerID = (name: string, id: number): string => `${id}-${name}`;

export const createCustomer = (name: string, age?: number, city?: string): void => {
    console.log(`Customer name ${name}`);
    if(age) console.log(`Customer age ${age}`);
    if(city) console.log(`Customer city ${city}`);
};

export const getBookByID = (idToFind: Book['id']): BookOrUndefined => {
    const books = getAllBooks();
    return books.find(({id}) => id === idToFind);
};

export const сheckoutBooks = (customer: string, ...bookIDs: number[]): string[] => {
    console.log(`Customer ${customer}`);
    return  bookIDs.map(getBookByID).filter(({available}) => available).map(({title}) => title);
};

export function getTitles (author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
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

export function assertStringValue (value: any): asserts value is string  {
    if (typeof value !== 'string') {
        throw new Error('value should have been a string');
    }
};

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not an instance of RefBook');
    }
}

export const bookTitleTransform = (title: any): string => {
    assertStringValue(title);
    return [...title].reverse().join('');
};

export const printRefBook = (data: any): void => {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
};

export const printBook = (book: Book): void => {
    console.log(`${book.title} by ${book.author}`);
};

export const getProperty = (book: Book, prop: BookProperties | 'isbn'): any => {
    const value = book[prop];
    return typeof value === 'function' ? value.name : value;
};

export const setDefaultConfig = (options: TOptions): TOptions => {
    options.duration ??= 200;
    options.speed ??= 200;
    return options;
};

export const purge = <T>(inventory: T[]): T[] => {
    return inventory.slice(2);
};


export const getObjectProperty = <TObject extends object, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string => {
    const value = obj[prop];
    return typeof value === 'function' ? value.name : value;
};


// export const getBooksByCategory = (category: Category, callback: LibMgrCallback): void => {
export const getBooksByCategory = (category: Category, callback: Callback<string[]>): void => {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch (error) {
            callback(error, null);
        }
    }, 2000);
};

export const logCategorySearch = (err: Error | null, titles: string[] | null): void => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
};

export const getBooksByCategoryPromise = (category: Category): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found');
            }
        }, 2000);
    });
};