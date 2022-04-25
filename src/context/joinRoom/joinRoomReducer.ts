import { joinRoomState } from '.';

type ActionProps =
  | { type: 'joinRoom' }
  | { type: 'leaveRoom' }
  | { type: 'toggleAudio' };

export const joinRoomReducer = (state: joinRoomState, action: ActionProps) => {
  switch (action.type) {
    case 'joinRoom':
      return {
        ...state,
        isInTheRoom: true,
      };

    case 'leaveRoom':
      return {
        ...state,
        isInTheRoom: false,
      };

    case 'toggleAudio':
      return {
        ...state,
        withAudio: !state.withAudio,
      };

    default:
      throw new Error('Unexpected action in joinRoomReducer');
  }
};
