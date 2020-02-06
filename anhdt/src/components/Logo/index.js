import React from 'react'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'

import { Logo } from './Logo.style'

const CustomLogo = () => (
	<Link to="/" style={{ 'textDecoration': 'none'}}>
		<Logo>
			<Icon
			  type="eye"
				theme="filled"
				style={{
					"paddingRight": "5px",
				}}
			/>
	      Football<span style={{
	    		'fontWeight': 'bold',
	    	}}>Party</span>
		</Logo>
	</Link>

)

export default CustomLogo