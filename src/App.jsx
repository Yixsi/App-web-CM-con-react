import Index from 'pages/index';
import Nosotros from "pages/Nosotros"
import Articulos from 'pages/Articulos';
import Contacto from 'pages/Contacto';
import "style/styles.css"

import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";

import Productos from 'pages/Productos';



function App() {
  return (
      <Router>
        <Switch>
        
          <Route path = "/contacto">
            <Contacto/>
          </Route>

          <Route path = "/articulos">
            <Articulos/>
          </Route>

          <Route path = "/productos">
            <Productos/>
          </Route>
          
          <Route path = "/nosotros">
            <Nosotros/>
          </Route>

          <Route path = "/">
            <Index/>
          </Route>

        </Switch>
      </Router>
  );
}

export default App;
