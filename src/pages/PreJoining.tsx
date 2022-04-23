import { useEffect, useRef } from 'react';
import { createLocalTracks } from 'twilio-video';

import { Navbar } from '../components/Navbar';
import { useJoinRoom } from '../context/joinRoom';

export const PreJoining = () => {
  const { toggleAudio, toggleVideo, withAudio, withVideo, joinRoom } =
    useJoinRoom();
  const videoDiv = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log('Generated the video with the new config');

    createLocalTracks({ audio: withAudio, video: withVideo }).then(
      (localTracks) => {
        localTracks.forEach((track: any) => {
          videoDiv.current?.appendChild(track.attach());
        });
      }
    );

    return () => {
      videoDiv.current = null;
    };
  }, [withAudio, withVideo]);

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
