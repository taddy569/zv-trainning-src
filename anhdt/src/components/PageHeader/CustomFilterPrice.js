import React from 'react'

import { Input } from 'antd'

const { Search } = Input

const CustomFilterPrice = () => {
	return (
		 <Search
      placeholder="Filter price..."
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    />
	)
}

export default CustomFilterPrice