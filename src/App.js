import Home from './pages/home'
import Event from './pages/events'
import EventReport from './pages/EventReport';
import Members from './pages/members'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Achievements from './pages/Achievements';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/team' element={<Members />} />
          <Route path='/event/:code' element={<EventReport />} />
          <Route path='/event' element={<Event />} />
          <Route path='/achievements' element={<Achievements />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;