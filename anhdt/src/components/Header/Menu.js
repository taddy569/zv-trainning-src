import React from 'react'
import { Menu } from 'antd'

import { CustomA } from './Header.style'

const Item = Menu.Item

const CustomMenu = () => (
	<Menu
	  style={{
	   	'display': 'flex',
	   	'flexDirection': 'row',
	   	'color': 'white',
	  }}
	>
		<div style={{
			'listStyleType':'none',
			'display': 'flex',
			'flexDirection': 'row',
		}}>
			<Item key="1"><CustomA>FIND MATCH</CustomA></Item>
		  <Item key="2"><CustomA>GROUNDS</CustomA></Item>
		  <Item key="3"><CustomA>MESSAGES</CustomA></Item>
		  <Item key="4"><CustomA>UPCOMING</CustomA></Item>
		</div>
	  

	</Menu>	
)

export default CustomMenu