import React from 'react'

import { WrapperPageHeader } from './PageHeader.style'

const CustomPageHeader = ({
  title,
  onBack={}
})  => {
	return (
		<WrapperPageHeader
			title={title}
		/>
	)
}

export default CustomPageHeader