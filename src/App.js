// import ComingSoon from './pages/ComingSoon';
import Home from './pages/home'
import Event from './pages/events'
import EventReport from './pages/EventReport';
//import Team from './pages(prev)/team'
import Members from './pages/members'
import './App.css';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import FacultyCards from './components/members/FacultyCards';

const App = () => {
	return (
		<>
		<Router>
			<Routes>
				<Route exact path='/' element={<Home/>}/>		
				<Route path='/team' element={<Members/>} />
				<Route path='/event/:code' element={<EventReport/>} />
				<Route path='/event' element={<Event/>} />		
			</Routes>
		</Router>
		</>
	);
}

export default App;