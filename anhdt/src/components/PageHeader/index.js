import React from 'react'

import WrapperPageHeader from './WrapperPageHeader'

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