import { initializeAvailableTimes, updateTimes } from './composants/Main';

test('updateTimes returns updated times', () => {
  const initialState = [];
  const action = { type: 'UPDATE_TIMES', date: '2023-10-10' };
  const updatedTimes = updateTimes(initialState, action);
  expect(updatedTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('initializeAvailableTimes returns correct initial times', () => {
  const times = initializeAvailableTimes();
  expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});