import React from 'react'

import { WrapperPageHeader, WrapperHeaderBar } from './PageHeader.style'
import CustomFunctionBar from './CustomFunctionBar'

const CustomPageHeader = ({
  title,
})  => {

	return (
		<WrapperHeaderBar>

			<WrapperPageHeader
				title={title}
			/>

			{ title === "Grounds" && <CustomFunctionBar /> }
			
		</WrapperHeaderBar>
		
	)
}

export default CustomPageHeader