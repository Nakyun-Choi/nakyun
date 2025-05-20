import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 1000,
        padding: '8px 16px',
        fontSize: '14px',
        borderRadius: '6px',
        border: 'none',
        backgroundColor: '#f0f0f0',
        cursor: 'pointer',
        boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
      }}
    >
      ← 뒤로가기
    </button>
  );
};

export default BackButton;