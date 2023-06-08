'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

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
    <button type="button" onClick={handleClick}>
      Edit ride
    </button>
  );
};

export default EditRideButton;
