import { Layout } from 'antd';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import FooterPage from './components/Footer';
import HeaderPage from './components/Header';
import store from './configureStore';
import Home from './pages/Home';
import Info from './pages/Info';


const { Content } = Layout;



const AppWrapper = styled.div`

`


function App() {
  return (
    <Provider store={store}>
      <HeaderPage />
      <Content style={{ padding: '0 50px' }}>
        <Router>
          <AppWrapper>
            <Switch>
              <Route exact path={'/'}>
                <Home />
              </Route>
              <Route path={'/info'}>
                <Info />
              </Route>
            </Switch>
          </AppWrapper>
        </Router>
      </Content>
      <FooterPage />
    </Provider>
  );
}

export default App;