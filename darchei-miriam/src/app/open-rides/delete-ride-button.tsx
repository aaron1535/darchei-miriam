'use client'
import React, { useState } from 'react';
import styles from './page.module.css'

type IdProps = {
  id: string;
};

const DeleteRideButton: React.FC<IdProps> = ({ id }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = () => {
    // Perform the deletion logic here
    console.log(`Ride ${id} is deleted`);
  };

  const handleConfirmDelete = () => {
    handleDelete();
    setShowConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  const openConfirmation = () => {
    setShowConfirmation(true);
  };

  return (
    <>
      {showConfirmation ? (
        <div className={styles.popup}>
          <p>
            Are you sure you want to delete ride number <strong>{id}</strong>?
          </p>
          <button type="button" onClick={handleConfirmDelete}>
            Confirm
          </button>
          <button type="button" onClick={handleCancelDelete}>
            Cancel
          </button>
        </div>
      ) : null}
      <button type="button" onClick={openConfirmation}>
        Delete ride
      </button>
    </>
  );
};

export default DeleteRideButton;


