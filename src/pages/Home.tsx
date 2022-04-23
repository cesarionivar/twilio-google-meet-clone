import heroImg from '../assets/hero.svg';

export const Home = () => {
  return (
    <div>
      <div className='px-10 lg:px-0 mt-14 lg:grid lg:grid-cols-2'>
        <div className='flex flex-col items-center justify-center max-w-lg m-auto'>
          <h1 className='text-4xl font-semibold leading-tight text-center text-gray-900 lg:text-left '>
            Google Meet Clone built with Twilio
          </h1>
          <p className='mt-8 mb-8 text-lg text-center text-gray-800 lg:text-left'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            possimus nulla autem itaque vel architecto nobis saepe veritatis
            expedita.
          </p>
          <div className='items-center self-start gap-6 sm:flex'>
            <button className='px-4 py-3 font-semibold text-white bg-blue-600 rounded text-normal hover:bg-blue-700'>
              <i className='pr-1 m-0 text-xs fa-solid fa-video'></i>
              New meeting
            </button>
            <form>
              <input
                type='text'
                placeholder='Enter a code'
                className='px-3 py-3 border border-gray-300 rounded text-normal lg:text-lg focus-within:border-blue-600 text-semibold'
              />
              <input
                type='submit'
                value='Join'
                className='pl-4 mt-4 text-lg font-semibold text-blue-600 cursor-pointer sm:mt-0 active:text-blue-700'
              />
            </form>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center mt-10'>
          <img
            src={heroImg}
            alt='Home Logo'
            className='rounded-full w-80 h-80'
          />
          <div className='mt-10'>
            <h4 className='my-4 text-xl font-semibold text-center'>
              Get a link to share
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              illum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
