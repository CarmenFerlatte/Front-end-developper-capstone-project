import { initializeAvailableTimes, updateTimes } from './js/utils';
import { fetchAPI } from './js/api';

// Mock de la fonction fetchAPI
jest.mock('./js/api', () => ({
  fetchAPI: jest.fn(),
}));

test('updateTimes returns updated times', () => {
  const initialState = [];
  const action = { type: 'UPDATE_TIMES', date: '2023-10-10' };
  const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  
  // Définir le comportement du mock pour fetchAPI
  fetchAPI.mockImplementation(() => mockTimes);

  const updatedTimes = updateTimes(initialState, action);
  expect(updatedTimes).toEqual(mockTimes);
});

test('initializeAvailableTimes returns correct initial times', () => {
  const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  
  // Définir le comportement du mock pour fetchAPI
  fetchAPI.mockImplementation(() => mockTimes);

  const times = initializeAvailableTimes();
  expect(times).toEqual(mockTimes);
});