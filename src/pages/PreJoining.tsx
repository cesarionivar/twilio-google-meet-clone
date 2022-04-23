import { useRef } from 'react';
import { Navbar } from '../components/Navbar';

import { useJoinRoom } from '../context/joinRoom';

export const PreJoining = () => {
  const { toggleAudio, toggleVideo, joinRoom } = useJoinRoom();
  const videoDiv = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <Navbar />
      <h2>Pre-join Room</h2>
      <div ref={videoDiv} />
      <button
        onClick={toggleAudio}
        className='bg-slate-800 p-5 mx-4 text-white rounded'
      >
        Audio
      </button>
      <button
        onClick={toggleVideo}
        className='bg-slate-800 p-5 mx-4 text-white rounded'
      >
        Video
      </button>
      <button
        onClick={joinRoom}
        className='bg-slate-800 p-5 mx-4 text-white rounded'
      >
        Join Room
      </button>
    </div>
  );
};
