import { validateDate, validateTime, validateGuests, validateOccasion } from '../src/js/validation';


describe('Validation Functions', () => {
  test('validateDate should return error message if date is empty', () => {
    expect(validateDate('')).toBe('La date est requise.');
  });

  test('validateDate should return empty string if date is provided', () => {
    expect(validateDate('2023-10-01')).toBe('');
  });

  test('validateTime should return error message if time is empty', () => {
    expect(validateTime('')).toBe("L'heure est requise.");
  });

  test('validateTime should return empty string if time is provided', () => {
    expect(validateTime('18:00')).toBe('');
  });

  test('validateGuests should return error message if guests is empty', () => {
    expect(validateGuests('')).toBe('Le nombre de personnes est requis.');
  });

  test('validateGuests should return error message if guests is less than 1', () => {
    expect(validateGuests(0)).toBe('Le nombre de personnes doit être entre 1 et 10.');
  });

  test('validateGuests should return error message if guests is more than 10', () => {
    expect(validateGuests(11)).toBe('Le nombre de personnes doit être entre 1 et 10.');
  });

  test('validateGuests should return empty string if guests is between 1 and 10', () => {
    expect(validateGuests(5)).toBe('');
  });

  test('validateOccasion should return error message if occasion is empty', () => {
    expect(validateOccasion('')).toBe("L'évènement est requis.");
  });

  test('validateOccasion should return empty string if occasion is provided', () => {
    expect(validateOccasion('Anniversaire')).toBe('');
  });
});