'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css'

type IdProps = {
  id: string;
};

const FindDriverButton: React.FC<IdProps> = ({ id }) => {

  const router = useRouter();
  const handleClick = () => {
    router.push(`/find-driver/${id}`);
    // console.log(`Finding driver for ${id}`);
  };

  return (
    <button type="button" onClick={handleClick}  className={styles.driverButton} >
      Find driver
    </button>
  );
};

export default FindDriverButton;