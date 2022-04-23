import { useContext } from 'react';
import { JoinRoomContext } from './joinRoomContext';

export const useJoinRoom = () => {
  const context = useContext(JoinRoomContext);

  if (context === undefined) {
    throw new Error('useJoinRoom must be used within a JoinRoomProvider');
  }

  return context;
};
