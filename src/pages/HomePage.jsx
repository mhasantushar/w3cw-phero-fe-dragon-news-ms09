import React from 'react';
import { Navigate } from 'react-router';

const HomePage = () => {
  return (
    <Navigate to='/category/1' />
  );
};

export default HomePage;