import { Route, Routes } from 'react-router-dom';

import { RoomRouter } from './RoomRouter';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/404';

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:roomId' element={<RoomRouter />} />
        <Route path='/_meet/:roomId' element={<NotFound />} />
      </Routes>
    </div>
  );
};
