import Index from 'pages/index';
import Nosotros from "pages/Nosotros"
import Articulos from 'pages/Articulos';
import Contacto from 'pages/Contacto';
import Login from 'pages/login';
import DashboardProducts from 'pages/dashProducts'
import Productos from 'pages/Productos';
import DashboardUser from 'pages/dashUsers'
import PrivateRoute from 'routes/PrivateRoute'

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";





function App() {

    return (
        <Router>
            <Routes>

                {/* <Route exact path="/dashboard-user" element={ <DashboardUser/>}/> */}
                <Route exact path="/dashboard-user"
                    element={
                        <PrivateRoute hasRole = "3">
                            <DashboardUser />
                        </PrivateRoute>
                    } />

                <Route exact path="/dashboard-products"
                    element={
                        <PrivateRoute hasRole = "2">
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
