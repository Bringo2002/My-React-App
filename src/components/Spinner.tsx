import React from 'react';

const Spinner: React.FC<{ loading: boolean }> = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="spinner">
      <div className="loader"></div>
      <style>{`
        .spinner {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px;
        }
        .loader {
          border: 8px solid #f3f3f3;
          border-top: 8px solid #3498db;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Spinner;
