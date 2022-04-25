import { useEffect, useRef } from 'react';
import { createLocalTracks } from 'twilio-video';

import { Navbar } from '../components/Navbar';
import { useJoinRoom } from '../context/joinRoom';

export const PreJoining = () => {
  const { withAudio, toggleAudio, joinRoom } = useJoinRoom();
  const videoDiv = useRef<HTMLDivElement | null>(null);

  const clearVideoDiv = () => {
    if (videoDiv.current?.firstElementChild) {
      videoDiv.current?.removeChild(videoDiv.current.firstElementChild);
    }
  };

  useEffect(() => {
    clearVideoDiv();

    createLocalTracks({ audio: true, video: true }).then((localTracks) => {
      localTracks.forEach((track: any) => {
        videoDiv.current?.appendChild(track.attach());
      });
    });

    return () => {
      clearVideoDiv();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className='items-center gap-10 px-4 mt-12 sm:flex justify-evenly'>
        <div className='relative w-auto h-auto sm:w-[600px] rounded-2xl'>
          <div
            ref={videoDiv}
            className='w-auto h-auto sm:w-[600px] video-container'
          />
          <button
            onClick={toggleAudio}
            className={`w-10 h-10 border border-white text-white rounded-full absolute left-1/2 bottom-4 ${
              withAudio ? 'bg-transparent' : 'bg-red-600'
            }`}
          >
            {withAudio ? (
              <i className='fa-solid fa-microphone'></i>
            ) : (
              <i className='fa-solid fa-microphone-slash'></i>
            )}
          </button>
        </div>
        <div className='flex flex-col items-center self-start justify-center gap-6 mt-16'>
          <h2 className='text-3xl'>What's your name?</h2>
          <form>
            <input
              type='text'
              className='w-full px-4 py-2 text-2xl text-center text-gray-800 border-b border-blue-600 outline-none focus:border-b-2'
              placeholder='Jhon Doe'
            />
          </form>
          <button
            onClick={joinRoom}
            className='text-lg font-bold text-blue-700 rounded'
          >
            Join call
          </button>

          <p className='self-end mt-32 mb-20'>
            If you join the call, automatically you accept the{' '}
            <span className='text-blue-500 underline cursor-pointer'>
              terms and conditions
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
