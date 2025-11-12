import React from 'react';
import { Link } from 'react-router';

const PageNotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 px-4 text-center">
        {/* Text Section */}
        <h1 className="text-6xl font-extrabold text-primary mt-6">404</h1>
        <h2 className="text-2xl font-semibold mt-2 text-base-content">
          Oops! Page Not Found 😢
        </h2>
        <p className="max-w-md text-base-content/70 mt-3">
          The page you’re looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Go Home Button */}
        <Link to='/'>
          <button className="btn btn-primary mt-6 px-8 text-lg font-medium shadow-lg hover:scale-105 transition-transform">
            Go Home
          </button>
        </Link>
      </div>
    );
};

export default PageNotFound;