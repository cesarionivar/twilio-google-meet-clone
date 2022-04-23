import { useRef } from 'react';
import { Navbar } from '../components/Navbar';

import { useJoinRoom } from '../context/joinRoom';

export const PreJoining = () => {
  const { joinRoom } = useJoinRoom();
  const videoDiv = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <Navbar />
      <h2>Pre-join Room</h2>
      <div ref={videoDiv} />
      <button onClick={joinRoom}>Join Room</button>
    </div>
  );
};
