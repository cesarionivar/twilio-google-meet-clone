import { createContext } from 'react';
import { joinRoomState } from '.';

interface contextProps extends joinRoomState {
  joinRoom: () => void;
}

export const JoinRoomContext = createContext({} as contextProps);
