import { logger, sealed, writable } from '../decorators';
import * as Interfaces from '../interfaces';

// @sealed('UniversityLibrarian')
@logger
class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;

    constructor() {
        console.log('Native constructor');
    }

    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
    };

    @writable(true)
    assistFaculty(): void {
        console.log('Assisting faculty');
    }

    @writable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }
}

export { UniversityLibrarian };

