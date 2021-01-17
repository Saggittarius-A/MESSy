
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Feedback from './components/pages/Feedback';
import { createBrowserHistory } from "history";
import Footer from './components/Footer';
import Student from './components/Student';
import Member from './components/Mess_Member/Member'
import MessMenu from './MessMenu';
import Breakfast from './components/Student/Breakfast';
import Dinner from './components/Student/Dinner';
import Lunch from './components/Student/Lunch';
import ResultsB from './components/Mess_Member/ResultsB';
import ResultsD from './components/Mess_Member/ResultsD';
import ResultsL from './components/Mess_Member/ResultsL';
import MessMenu1 from './MessMenu1';
import MessMenu2 from './MessMenu2';

function App() {
   
const history = createBrowserHistory();

  return (
    <>
      <Router  history={history}>
       <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Feedback' component={Feedback} />
          <Route path='/Student' component={Student}/>
          <Route path='/Member' component={Member}/>
          <Route path='/Breakfast' component={Breakfast}/>
          <Route path='/Lunch' component={Lunch}/>
          <Route path='/Dinner' component={Dinner}/>
          <Route path='/ResultsB' component={ResultsB}/>
          <Route path='/ResultsD' component={ResultsD}/>
          <Route path='/ResultsL' component={ResultsL}/>
          <Route path='/MessMenu' component={MessMenu}/>
          <Route path='/MessMenu1' component={MessMenu1}/>
          <Route path='/MessMenu2' component={MessMenu2}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;