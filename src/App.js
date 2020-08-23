import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Link to="/photos">
            <h2 className="title">Get some Photos</h2>
          </Link>
        </Route>
        <Route path="/Cart">
          <Cart />
        </Route>
        <Route path="/Photos">
          <Photos />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
