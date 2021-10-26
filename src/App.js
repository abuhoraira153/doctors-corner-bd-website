import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Details from './Pages/Details/Details/Details';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import ContactUs from './Pages/ContactUs/ContactUs';
import Gallery from './Pages/Gallery/Gallery';
import Register from './Pages/Register/Register';
import Services from './Pages/Home/Services/Services';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path = "/">
            <Home></Home>
          </Route>
          <Route exact path = "/home">
            <Home></Home>
          </Route>
          <Route path = "/services">
            <Services></Services>
          </Route>
          <Route path = "/login">
            <Login></Login>
          </Route>
          <Route path = "/register">
            <Register></Register>
          </Route>
          <PrivateRoute path = "/details/:serviceId">
            <Details></Details>
          </PrivateRoute>
          <PrivateRoute path = "/contactUs">
            <ContactUs></ContactUs>
          </PrivateRoute>
          <PrivateRoute path = "/gallery">
            <Gallery></Gallery>
          </PrivateRoute>
          <Route path = "*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
