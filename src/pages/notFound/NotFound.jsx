import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 className='text-9xl font-bold text-blue-600'>404</h1>
      <h2 className='text-4xl font-semibold mt-4 text-gray-800'>
        Page Not Found
      </h2>
      <p className='text-lg text-gray-600 mt-2 mb-8'>
        Soryy This page is not exist
      </p>
      <Link
        to='/'
        className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300'
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
