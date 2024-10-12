/* eslint-disable no-useless-escape*/

export class Validator {
    constructor(nikeName) {
        this.nikeName = nikeName;
    };
    validateUsername() {
        console.log(this.nikeName);
        const regText = /^[^0-9 -][\w\-\ ][\w\-\ ]+[^0-9 -]$/i.test(this.nikeName);
        const regNumber = /^(\D|\d(\D|$)|\d\d(\D|$))*$/.test(this.nikeName);
        if (regText && regNumber) {
            // return console.log('Строка подходит');
            return true;
        } else {
            // return console.log('Строка НЕЕ подходит');
            return false;
        };
    };
};

// nikeName = new Validator('3infobk-ru');
// console.log(nikeName.validateUsername());

// nikeName = new Validator('infob33k-ru3');
// console.log(nikeName.validateUsername());

// module.exports = {
//     Validator
// }