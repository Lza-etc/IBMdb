import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Chart from './components/Chart/Chart';
import DataTable from './components/Table/DataTable';
import signin from "./pages/signin"

import Navbar from './components/Navigation/Navigation';


function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">

      <Route path="/" component={Navbar} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/table" component={DataTable} />
        <Route path="/chart" component={Chart} />
        <Route path="/signin" component={signin} />
        {/* <Route path="/slot" component={Slot} />
        <Route path="/zoom" component={Zoom} />
        <Route path="/recording" component={ZoomRecording} />

        <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
