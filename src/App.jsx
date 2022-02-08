import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
// import { Router } from "@material-ui/icons";
// import { Switch } from "@material-ui/core";
// import Pay from "./Pay";
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";
<<<<<<< HEAD
import { useSelector } from "react-redux";
//import Products from "./components/Products";
const App = () => {
  const user = useSelector((state)=>state.user.currentUser);
=======
import Products from "./components/Products";
import { useSelector } from "react-redux";



const App = () => {
  const user = useSelector(state=>state.user.currentUser);
>>>>>>> 21f36d3c3d5b71f7d282e0cd6298ab99e7325601
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/register">
        {user? <Redirect to="/"/>:<Register/>}
        </Route>
        <Route path="/login">
          {user? <Redirect to="/"/>:<Login/>}
        </Route>
        <Route path="/products/:category">
          <ProductList/>
        </Route>
        <Route path="/product/:id">
          <Product/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/success">
          <Success/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;