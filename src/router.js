import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Example from './routes/Example';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/index" exact component={IndexPage}/>
        <Route path="/" exact component={Products}/>
        <Route path="/example" exact component={Example}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
