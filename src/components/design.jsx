import Main from "./Main"
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Design() {
  return (
    <>
        <div>this is the design resume page</div>
        <Link to="/">go back</Link>
    </>
  );
}

export default Design;
