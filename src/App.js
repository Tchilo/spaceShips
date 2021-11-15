/* eslint-disable */
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Missions from './components/Missions';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import Navbar from './components/Navbar';

const App = () => (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/my-profile" element={<Profile />} />
        </Routes>

    </Router>
);

export default App;
