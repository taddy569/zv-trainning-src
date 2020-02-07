import React from 'react'
import { Layout, Menu, Divider } from 'antd'
import { Switch, Route } from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'
import HomePage from '../HomePage'
import DetailPage from '../../containers/DetailPage'

const { Content } = Layout;

const App = () => {
  return (
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
  )
}

export default App;
