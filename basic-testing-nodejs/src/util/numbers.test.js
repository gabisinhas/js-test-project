import {it,expect} from 'vitest';
import {transformToNumber} from './numbers.js';

it('should sum string', () => {
  const value = '1';
  const result = transformToNumber(value);
  expect(result).toEqual(1);

})

it('should sum number', () => {
  const value = 2;
  const result = transformToNumber(value);
  expect(result).toEqual(2);

})

it('should sum decimals', () => {
  const value = 2.2;
  const result = transformToNumber(value);
  expect(result).toEqual(2.2);

})

it('should sum char', () => {
  const value = 'invalid';
  const value1 = {};
  const result = transformToNumber(value);
  const result1 = transformToNumber(value1);
  expect(result).toBeNaN();
  expect(result1).toBeNaN();

})

it('should sum null', () => {
  const value = '';
  const result = transformToNumber(value);
  expect(result).toEqual(0);

})
