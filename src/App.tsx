import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

// import logo from './logo.svg';
import './App.css';

import {TopPage} from "components/TopPage";
import {SubPage} from "components/SubPage"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/todo/new' component={TopPage} />
        <Route path='/todo/:id' component={SubPage} />
      </Switch>
      <Link to='/'>Back To Top</Link>
    </BrowserRouter>
  );
};

export default App;
