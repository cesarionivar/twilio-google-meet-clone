import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='mt-32 text-center select-none space-y-14 '>
      <h1 className='text-4xl text-gray-900'>Invalid video call name.</h1>
      <button
        className='px-6 text-white bg-blue-500 rounded py-1.5 hover:bg-blue-600'
        onClick={() => navigate('/')}
      >
        Return to home screen
      </button>
    </div>
  );
};
