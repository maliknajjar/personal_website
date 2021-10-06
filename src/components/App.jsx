import Main from "./Main"
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import Code from "./code"
import Design from "./design"
import dictionary from "../database/dictionary"

import getCookie from "../functions/coockies"

function App() {
  // get url params
  var url = new URL(window.location.href);
  var lang = url.searchParams.get("lang");
  if (lang != null) {
    if (lang == "ar") {
      document.cookie = "lang=ar";
      console.log("setting language to arabic")
    } else {
      document.cookie = "lang=en";
      console.log("setting language to english")
    }
  } else {
    if (getCookie("lang") == ""){
      document.cookie = "lang=en";
      console.log("setting language to english")
    } else {
      document.cookie = `lang=${getCookie("lang")}`;
      console.log(`setting language to ${getCookie("lang")}`)
    }
  }
  dictionary.language = getCookie("lang")
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
