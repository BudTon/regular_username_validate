import Validator from './js/UserName.class.js'
// const { Validator } = require('./js/UserName.class.js');

let nikeName = new Validator('infobk-ru');
console.log(nikeName.validateUsername());

nikeName = new Validator('infob333k-ru');
console.log(nikeName.validateUsername());