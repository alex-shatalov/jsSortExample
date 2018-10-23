import { atomThePug, Dog, Pug } from './PrototypeExample';
describe('atomThePug', () => {
  test('properties', () => {
    expect(atomThePug.name).toBe('atom');
    expect(atomThePug.bark).toEqual(expect.any(Function));
  });
  test('constructor', () => {
    expect(atomThePug.constructor).toEqual(Pug);
    expect(atomThePug.constructor).not.toEqual(Dog);
  });
  test('instanceof', () => {
    expect(atomThePug instanceof Pug).toBeTruthy();
    expect(atomThePug instanceof Dog).toBeTruthy();
  });
  test('hasOwnProperty', () => {
    expect(atomThePug.hasOwnProperty('bark')).toBeFalsy();
    expect(atomThePug.hasOwnProperty('name')).toBeTruthy();
  });
});
