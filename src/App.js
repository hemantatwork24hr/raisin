import './App.css';
import Registration from './Components/Account/Registration';
import {Link, Switch, Route, NavLink} from 'react-router-dom';
import Guests from './Components/Guests/guests';
import Rooms from './Components/Rooms/rooms';
import Billings from './Components/Billings/billings';
import Dashboard from './Components/Dashboard/Dashboard'
import InvalidPath from './Components/notfound';
import Navigation from './Components/Common/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Dashboard}></Route>
        <Route path="/rooms" component={Rooms}></Route>
        {/* <Route path="/room/:id" component={EditRoom}></Route> */}
        <Route path="/guests" component={Guests}></Route>
        <Route path="/billings" component={Billings}></Route>
        <Route component={InvalidPath}></Route>
      </Switch>
      
      {/* <div className="container">
        <Registration/>
      </div> */}
    </div> 
  );
}

export default App;
