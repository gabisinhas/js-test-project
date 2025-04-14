import {it,expect} from 'vitest';
import {add, options} from './math.js';

it('should add numbers', () => {

    const numbers = [1, 2, 3];
    const result = add(numbers);
    expect(result).toBe(6);


})

it('should add options', () => {
    const permission = 'W';
    const result = options(permission);
    console.log(result);
    
    expect(result).toEqual([1, 2, 4]);

})