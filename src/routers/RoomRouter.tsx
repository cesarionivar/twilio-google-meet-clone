import { useParams, Navigate } from 'react-router-dom';

import { useJoinRoom } from '../context/joinRoom';
import { PreJoining } from '../pages/PreJoining';
import { Room } from '../pages/Room';

const rooms = ['xyz', 'abc', 'def'];

export const RoomRouter = () => {
  const { roomId } = useParams();
  const { isInTheRoom } = useJoinRoom();

  if (!rooms.includes(roomId!)) {
    return <Navigate to={`/_meet/${roomId}`} replace={true} />;
  }

  return <>{isInTheRoom ? <Room /> : <PreJoining />}</>;
};
