import Main from "./Main"
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Code from "./code"
import Design from "./design"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/code">
          <Code />
        </Route>
        <Route path="/design">
          <Design />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
