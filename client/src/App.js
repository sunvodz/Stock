import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer/reducer';
import { Provider } from 'react-redux';
import productLists from './component/product-lists';
import Header from './component/Header';
import PageNotFound from './component/Page-not-found';
import thunk from 'redux-thunk';
function App() {
  const store = createStore(reducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={productLists} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
export default App;
