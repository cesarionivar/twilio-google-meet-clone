import { createContext } from 'react';
import { joinRoomState } from '.';

interface contextProps extends joinRoomState {
  joinRoom: () => void;
  toggleAudio: () => void;
  toggleVideo: () => void;
}

export const JoinRoomContext = createContext({} as contextProps);
