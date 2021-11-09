import Index from 'pages/index';
import Nosotros from "pages/Nosotros"
import Articulos from 'pages/Articulos';
import Contacto from 'pages/Contacto';
import Login from 'pages/login';
import "style/styles.css"

import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";

import Productos from 'pages/Productos';



function App() {
  return (
    
      <Router>
        <Routes>

          <Route exact path = "/login" element= {<Login/>} />
        
          <Route exact path = "/contacto" element={<Contacto/>} />

          <Route exact path = "/articulos" element={<Articulos/>} />
          
          <Route exact path = "/productos" element = {<Productos/>} />
          
          <Route exact path = "/nosotros" element= {<Nosotros/>} />
            
          <Route exact path = "/" element= {<Index/>} />

        </Routes>
      </Router>
  );
}

export default App;
