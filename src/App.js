import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

/********Components*******/
import WebLanding from './components/WebLanding'
import Solicitud from './components/Solicitud'

function App() {
  return (
    <Router>
        <Route path="/" exact component={WebLanding} />
        <Route path="/solicitud" exact component={Solicitud} />
    </Router>
  );
}

export default App;
