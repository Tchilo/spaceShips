import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Missions from './components/Missions';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import Navbar from './components/Navbar';
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <main>
      <div className="container">

        <Routes>
          <Route path="/" element={<Rockets />} exact="true" />
          <Route path="/missions" element={<Missions />} />
          <Route path="/my-profile" element={<Profile />} />
        </Routes>
      </div>
    </main>

  </Router>
);

export default App;
