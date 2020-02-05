import React from 'react'

import CustomButton from './CustomButton'
import WrapperPrice from '../../../components/Item/WrapperPrice'

const RightMain = (props) => {
	return (
		<div>
			<p>{props.name}</p>
			<p>{props.address}</p>
			<WrapperPrice>{props.price}</WrapperPrice>
			<CustomButton>BOOK NOW</CustomButton>
		</div>
	)
}

export default RightMain