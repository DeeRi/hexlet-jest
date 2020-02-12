import reverse from '../src/reverse';

test('reverse', () => {
  expect(reverse('abc2d')).toEqual('d2cba');
  expect(reverse('')).toEqual('');
});