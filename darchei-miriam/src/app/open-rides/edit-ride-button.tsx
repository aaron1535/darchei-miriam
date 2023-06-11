'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css'

type IdProps = {
  id: string;
};

const EditRideButton: React.FC<IdProps> = ({ id }) => {

  const router = useRouter();
  const handleClick = () => {
    router.push(`/edit-ride/${id}`);
    // console.log(`Finding driver for ${id}`);
  };

  return (
    <button type="button" onClick={handleClick} className={styles.editButton} >
      Edit ride
    </button>
  );
};

export default EditRideButton;
