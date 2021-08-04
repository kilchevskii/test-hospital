import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import DataBase from "./components/Hospital/DataBase";
import TableEmployees from "./components/Hospital/TableEmployees";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWorklog } from "./redux/actions/actionWorkLog";
import { getEmployees } from "./redux/actions/actionEmployees";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const loading = useSelector((state) => state)
  const employees = useSelector((state) => state.employees.data);
  const worklog = useSelector((state) => state.worklog.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorklog());
    dispatch(getEmployees());
  }, [dispatch]);

  if(!loading) return <Spinner />;
  return (
    <Router>
      <div className="mainPage">
        <div className="header">
          <nav>
            <ul>
              <li key={"1"}>
                <Link to={process.env.PUBLIC_URL + "/"}>Main</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            component={() => <TableEmployees employees={employees} />}
          />
          <Route path='/:id' children={<DataBase worklog={worklog} />}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
