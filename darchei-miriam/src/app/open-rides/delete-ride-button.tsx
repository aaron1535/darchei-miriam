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
        <div className={styles.popupContainer}>
          <div className={styles.popupBox}>
            <div className={styles.popupHeader}>
              <h3 className={styles.popupTitle}>Delete Ride Confirmation</h3>
              <button type="button" onClick={handleCancelDelete} className={styles.popupButton}>
                X
              </button>
            </div>
            <div className={styles.popupContent}>
              <p>
                Are you sure you want to delete ride number <strong>{id}</strong>?
              </p>
            </div>
            <div className={styles.popupButtons}>
              <button type="button" onClick={handleConfirmDelete} className={styles.popupButton}>
                Confirm
              </button>
              <button type="button" onClick={handleCancelDelete} className={styles.popupButton}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <button type="button" onClick={openConfirmation} className={styles.deleteButton}>
        Delete ride
      </button>
    </>
  );
};

export default DeleteRideButton;



