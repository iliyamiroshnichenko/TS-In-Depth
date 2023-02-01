let Utility;
(function (Utility) {
    Utility.maxBooksAllowed = function (age) {
        return age < 12 ? 3 : 10;
    };
    let Fees;
    (function (Fees) {
        Fees.calculateLateFee = function (daysLate) {
            return daysLate * 0.25;
        };
    })((Fees = Utility.Fees || (Utility.Fees = {})));
    let privateFunc = function () {
        return console.log('This is a private function');
    };
})(Utility || (Utility = {}));
