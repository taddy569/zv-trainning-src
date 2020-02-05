import React from 'react'
import { Layout, Icon } from 'antd'

import ChildWrapper from './ChildWrapper'
import CustomCategory from './CustomCategory'
import CustomIcon from './CustomIcon'
import Wrapper from './Wrapper'
import Logo from '../Logo'

const { Footer } = Layout


const CustomFooter = () => (
  <Wrapper>

    <Footer style={{
      'height': '100%',
    }}>
      
      <ChildWrapper justifyContent="space-between">
        <ChildWrapper justifyContent="space-between">
          <Logo />

          <ChildWrapper justifyContent="space-between">
            <CustomCategory>Download App</CustomCategory>
            <CustomCategory>F.A.Q</CustomCategory>
            <CustomCategory>Support</CustomCategory>
            <CustomCategory>Feedback</CustomCategory>
          </ChildWrapper>

        </ChildWrapper>
              

        <ChildWrapper justifyContent="space-between">
          <CustomIcon type="facebook" />
          <CustomIcon type="twitter" />
          <CustomIcon type="instagram" />
        </ChildWrapper>

      </ChildWrapper>

      <ChildWrapper justifyContent="flex-start">
        <Icon type="copyright" style={{
          fontSize: '15px',
        }} /><span>2017 Zigvy Inc.</span>  
      </ChildWrapper>

      


      

    </Footer>

  </Wrapper>
)

export default CustomFooter


