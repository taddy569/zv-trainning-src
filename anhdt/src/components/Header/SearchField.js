import React from 'react'
import styled from 'styled-components'
import { Input } from 'antd'

const SearchField = () => (
	<Input placeholder="input with clear icon" allowClear onChange={() => {console.log('hello')}} />
)

export default SearchField