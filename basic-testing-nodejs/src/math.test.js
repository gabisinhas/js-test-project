import {it,expect} from 'vitest';
import {add} from './math.js';

it('should add numbers', () => {

    const numbers = [1, 2, 3];
    const result = add(numbers);
    expect(result).toBe(6);


})