import React from 'react';
import { useNavigate } from 'react-router-dom';

const Trainings = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px', minHeight: '100vh' }}>
      <button onClick={() => navigate(-1)} style={{
        backgroundColor: '#0d9488',
        color: 'white',
        fontWeight: '600',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        border: 'none',
        cursor: 'pointer',
        marginBottom: '1.5rem'
      }}>
        ← Back
      </button>
      <h1>Trainings</h1>
      <p>Content for trainings page coming soon...</p>
    </div>
  );
};

export default Trainings;

