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

const getAllBooks = (): Book[] => {
    const books =	[
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JAVASCRIPT},
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JAVASCRIPT },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true , category: Category.CSS},
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JAVASCRIPT }
    ];
    return books;
};

// Task 02.01.2
const logFirstAvailable = (books: Book[]) => {
    console.log('Количество книг в массиве ', books.length);
    const [firstAvailableBook] = books.filter(({ available }) => available);
    const {title} = firstAvailableBook;
    console.log('Название первой доступной книги ', title);
};
// Task 02.01.3
const allBooks = getAllBooks();
logFirstAvailable(allBooks);
// Task 02.01.6
const getBookTitlesByCategory = (selectedCategory: Category): Array<string> => allBooks.filter(({ category }) => category === selectedCategory).map(({ title }) => title);
// Task 02.01.7
const logBookTitles = (titles: string[]): void => console.log(titles);
const jsBooks = getBookTitlesByCategory(Category.JAVASCRIPT);
logBookTitles(jsBooks);
// Task 02.01.8
const getBookAuthorByIndex = (bookId: number): myTuple => {
    const { title, author } = allBooks.find(({ id }) => bookId === id);
    return [title, author];
};
console.log(getBookAuthorByIndex(3));
// Task 02.01.10 ???bigint???
const calcTotalPages = () => {
    const libs = [  { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];

    const totalPages = libs.reduce((acc, { books, avgPagesPerBook }) => {
        return acc + books * avgPagesPerBook ;
    }, 0);
    return totalPages;
};

console.log(calcTotalPages());
