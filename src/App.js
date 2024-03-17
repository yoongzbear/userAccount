import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Registration from './Components/Registration/Regisration';
import Login from './Components/Login/Login';
import ForgotPw from './Components/Login/ForgotPw';
import UserProfile from './Components/UserProfile/UserProfile';
import Logout from './Components/Logout/Logout';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpw" element={<ForgotPw />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
