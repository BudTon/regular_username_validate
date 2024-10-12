/* eslint-disable no-undef */

import Validator from "../UserName.class.js";
// const { Validator } = require('../UserName.class.js');

test.each([
    [
        'infobk-ru',
        true
    ], [
        'infob333k-ru',
        false
    ], [
        '-infobk.ru',
        false
    ], [
        'infobk-ru37',
        false
    ]],
)(`testing validateUsername nikeName = %s`, (nikeName, expected) => {
    let nikeName = new Validator(nikeName)
    const result = nikeName.validateUsername();
    expect(result).toBe(expected);
});

