import React from 'react'

import { WrapperFunctionBar } from './PageHeader.style'
import CustomFilterPrice from './CustomFilterPrice'
import CustomSort from './CustomSort'

import CustomSearchName from '../../containers/PageHeader/CustomSearchName'

const CustomFunctionBar = () => {
	return (
		<WrapperFunctionBar>
			<CustomFilterPrice />
			<CustomSort />
			<CustomSearchName />
		</WrapperFunctionBar>
	)
}

export default CustomFunctionBar