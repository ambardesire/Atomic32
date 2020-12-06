import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

/********Components*******/
import WebLanding from './components/WebLanding'
import Solicitud from './components/Solicitud'
import Solicitud2 from './components/Solicitud2'
import Solicitud3 from './components/Solicitud3'
import Editar from './components/editar'
import Solicitud4 from './components/Solicitud4'

function App() {
  return (
    <Router>
        <Route path="/" exact component={WebLanding} />
        <Route path="/solicitud" exact component={Solicitud} />
        <Route path="/solicitudStep2" exact component={Solicitud2} />
        <Route path="/solicitudStep3" exact component={Solicitud3} />
        <Route path="/editar" exact component={Editar} />
        <Route path="/solicitudStep4" exact component={Solicitud4} />
    </Router>
  );
}

export default App;
