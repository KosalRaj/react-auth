import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';

const RoutePaths = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LogInPage />} />
            </Routes>
            <Routes>
                <Route path="/signup" element={<SignUpPage />} />
            </Routes>
            
        </Router>
    );
}

export default RoutePaths;