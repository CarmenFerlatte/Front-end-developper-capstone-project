import React, { useState } from 'react';
import '../styles/header.css';
import BookingForm from './BookingForm';

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  console.log("submitForm in BookingPage:", submitForm);

  return (
    <div>
      <button onClick={openModal}>Réserver une table</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;