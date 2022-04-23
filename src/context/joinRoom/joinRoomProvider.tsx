import { useContext, useReducer } from 'react';
import { JoinRoomContext } from './joinRoomContext';
import { joinRoomReducer } from './joinRoomReducer';

export interface joinRoomState {
  isInTheRoom: boolean;
}

const JOIN_ROOM_INITIAL_STATE = {
  isInTheRoom: false,
};

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const JoinRoomProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(
    joinRoomReducer,
    JOIN_ROOM_INITIAL_STATE
  );

  const joinRoom = () => {
    dispatch({ type: 'joinRoom' });
  };

  return (
    <JoinRoomContext.Provider value={{ ...state, joinRoom }}>
      {children}
    </JoinRoomContext.Provider>
  );
};