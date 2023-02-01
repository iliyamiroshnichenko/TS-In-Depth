namespace Utility {
    export const maxBooksAllowed = (age: number): number => age < 12 ? 3 : 10;

    export namespace Fees {
        export const calculateLateFee = (daysLate: number): number => daysLate * 0.25;
    }

    const privateFunc =  (): void => console.log('This is a private function');
}