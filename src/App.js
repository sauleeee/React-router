import { Routes, Route } from 'react-router-dom';

import {HomePage} from './pages/HomePage'
import {ProfilePage} from './pages/ProfilePage'
import {FriendsPage} from './pages/FriendsPage'
import {FriendsItemPage} from './pages/FriendsItemPage'
import {NotfoundPage} from './pages/NotFoundPage'
import {LoginPage} from './pages/LoginPage';

import {Layout} from './components/Layout'

import { RequireAuth } from './Auth/RequireAuth'
import { AuthProvider } from './Auth/Provider'

function App() {
  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element = {<HomePage />} />

          <Route path="profile" element={
            <RequireAuth>
                <ProfilePage />
            </RequireAuth>
          
          } />

          <Route path="friends" element={
            <RequireAuth>
              <FriendsPage />
            </RequireAuth>
          } />
          <Route path="friends/:id" element={<FriendsItemPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
    </>
  );
}

export default App;