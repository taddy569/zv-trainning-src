import React from 'react'
import { Layout, Menu, Divider } from 'antd'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '../../configStore'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomePage from '../HomePage'
import DetailPage from '../DetailPage'

const { Content } = Layout;


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout style={{
          'width': '100%',
          'position': 'absolute',
          'top': 0,
          'left': 0,
        }}>
          <Header />

          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: '85vh' }}>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/detail/:id" component={DetailPage} />
              </Switch>
            </div>
          </Content>

          <Divider />

          <Footer />
        </Layout>
      </Router>
    </Provider>
  )
}

export default App;
