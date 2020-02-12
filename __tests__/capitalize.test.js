import capitalize from '../src/capitalize';

test('capitalize', () => {
  expect(capitalize('hello')).toEqual('HELLO');
  expect(capitalize('')).toEqual('');
});