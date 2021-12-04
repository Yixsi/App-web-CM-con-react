import Index from 'pages/index';
import Nosotros from "pages/Nosotros"
import Articulos from 'pages/Articulos';
import Contacto from 'pages/Contacto';
import Login from 'pages/login';
import DashboardProducts from 'pages/dashProducts'
import DashboardUser from 'pages/dashUsers'
import PrivateRoute from 'components/RutasPrivadas'

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

        {/* <Route exact path="/dashboard-user" element={ <DashboardUser/>}/> */}
        <Route exact path="/dashboard-user"
          element={
            <PrivateRoute>
              <DashboardUser />
            </PrivateRoute>
          } />

        <Route exact path="/dashboard-products"
          element={
            <PrivateRoute>
              <DashboardProducts />
            </PrivateRoute>
          } />

        <Route exact path="/login" element={<Login />} />

        <Route exact path="/contacto" element={<Contacto />} />

        <Route exact path="/articulos" element={<Articulos />} />

        <Route exact path="/productos" element={<Productos />} />

        <Route exact path="/nosotros" element={<Nosotros />} />

        <Route exact path="/" element={<Index />} />

      </Routes>
    </Router>
  );
}

export default App;
