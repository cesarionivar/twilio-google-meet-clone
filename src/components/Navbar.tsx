import { Link } from 'react-router-dom';
import logoUrl from '../assets/google-meet.svg';

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-6 py-4'>
      <Link to='/' className='flex items-center gap-3'>
        <img src={logoUrl} alt='Logo' className='w-8 h-8' />
        <h2 className='text-lg text-gray-500 sm:text-2xl'>
          <span className='font-semibold'>Twilio</span> Meet
        </h2>
      </Link>
      <div className='flex items-center text-gray-500'>
        <p className='text:normal sm:text-lg'>3:37 PM • Sat, April 23</p>
        <p className='hidden gap-5 ml-8 mr-10 text-xl cursor-pointer sm:flex'>
          <i className='fa-regular fa-circle-question'></i>
          <i className='fa-regular fa-message'></i>
          <i className='fa-solid fa-gear'></i>
        </p>
        <p className='hidden cursor-pointer sm:block'>
          <i className='fa-solid fa-grip'></i>
        </p>
      </div>
    </div>
  );
};
