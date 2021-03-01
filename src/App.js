import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import FirstPerson from "./components/first-person";

function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path="/" component={FirstPerson} exact />
          <Route path="/first-person" component={FirstPerson} exact />
        </Switch>
        </>
    </BrowserRouter>
  );
}

export default App;
