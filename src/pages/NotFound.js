import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container text-center">
        <h1 style={{ fontSize: 'var(--fs-5xl)', marginBottom: 'var(--space-md)' }}>404</h1>
        <h2 style={{ marginBottom: 'var(--space-lg)' }}>Page Not Found</h2>
        <p className="text-secondary mb-xl">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
