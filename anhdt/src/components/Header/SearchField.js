import React from 'react'
import { Input } from 'antd'

const SearchField = () => (
	<Input placeholder="Search ground, team or someone..." allowClear onChange={() => {console.log('hello')}} />
)

export default SearchField