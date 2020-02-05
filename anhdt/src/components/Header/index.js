import React from 'react'
import { Layout, Icon, Avatar } from 'antd'

import Logo from '../Logo'
import SearchField from './SearchField'
import Menu from './Menu'
import Profile from './Profile'
import Wrapper from './Wrapper'

const { Header } = Layout

const CustomHeader = () => (
	<Wrapper>
		<Header style={{
    	'width': '100%',
    	'backgroundColor': 'black',
    	'display': 'flex',
			'flexDirection': 'row',
			'alignItems': 'center',
  		'justifyContent': 'space-around',
  		'padding': '0 10px',
  	}}>
    
    	<Logo />

    	<SearchField />

	    <Menu />

	    <Profile />

	  </Header>

	</Wrapper>

)

export default CustomHeader