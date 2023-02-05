export default class Shelf<T> {
    private items: T[]= [];

    add(item: T): void {
        this.items.push(item);
    }

    getFirst(): T {
        return this.items[0];
    }
}

// import { Book, Magazine} from '../interfaces';

// export class Shelf2 {
//     private items:  Book[] | Magazine[]= [];

//     add(item: Book | Magazine): void {
//         this.items.push(item);
//     }

//     getFirst(): Book | Magazine {
//         return this.items[0];
//     }
// }