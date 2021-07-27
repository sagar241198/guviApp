
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './container/Home';
import { Route } from 'react-router-dom';
import SignUp from './Layout/SignUp';

function App() {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route  path="/@guvi_signup">
        <SignUp />
      </Route>
    </>
  );
}

export default App;
