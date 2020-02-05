import React from 'react'

import WrapperInformation from './WrapperInformation'
import WrapperPrice from './WrapperPrice'

const Information = ({ address, price }) => {
	return (
		<WrapperInformation>
			<p>{address}</p>
			<WrapperPrice>{price}</WrapperPrice>
		</WrapperInformation>
	)
}

export default Information