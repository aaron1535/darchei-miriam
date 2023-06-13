'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css'

const HomeButton: React.FC = () => {

  const router = useRouter();
  const handleClick = () => {
    router.push(`./`);
  };

  return (
    <button type="button" onClick={handleClick}  className={styles.homeButton} >
      Home
    </button>
  );
};

export default HomeButton;