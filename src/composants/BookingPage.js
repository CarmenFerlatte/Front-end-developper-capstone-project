import React, { useState } from 'react';
import '../styles/header.css';
import BookingForm from './BookingForm';

const BookingPage = ({ availableTimes, dispatch }) => {
  console.log('dispatch in BookingPage:', dispatch); // Ajoutez ce log pour vérifier `dispatch`
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen (false);

  return (
    <div>
      <button onClick={openModal}>Réserver une table</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
            </div>
          </div>
      )}
    </div>
  );
};

export default BookingPage
