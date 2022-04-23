import { BrowserRouter } from 'react-router-dom';

import { JoinRoomProvider } from './context/joinRoom';
import { AppRouter } from './routers/AppRouter';

export const App = () => {
  return (
    <JoinRoomProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </JoinRoomProvider>
  );
};
