import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import DataBase from "./components/Hospital/DataBase";
import TableEmployees from "./components/Hospital/TableEmployees";
function App() {
  return (
    <Router>
      <div className="mainPage">
        <div className="header">
          <nav>
            <ul>
              <li key={"1"}>
                <Link to={process.env.PUBLIC_URL + "/"}>Main</Link>
              </li>
              {/* <li key={'2'}>
                <Link to={process.env.PUBLIC_URL + '/employess'}>Employess</Link>
              </li> */}
            </ul>
          </nav>
        </div>
        <Route path={process.env.PUBLIC_URL + "/"} exact></Route>

        <Route path={process.env.PUBLIC_URL + "/"} exact>
          <TableEmployees />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/database"} exact>
          <DataBase />
        </Route>
      </div>
    </Router>
  );
}

export default App;
