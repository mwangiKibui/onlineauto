import React from 'react';

//third-party
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

//components
import Layout from './components/layout';
import store from './store/store';

//styles
import './style/style.css';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Layout />
    </Router>
    </Provider>
  );
}

export default App;
