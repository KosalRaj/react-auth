import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';

const RoutePaths = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default RoutePaths;