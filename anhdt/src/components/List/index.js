import React from 'react'
import { List, Card } from 'antd'

import Item from '../Item'
import Ul from './Ul'

const CustomList = (props) => (
	<List
    grid={{ gutter: 10, column: 3 }}
    dataSource={props.data}
    renderItem={item => (
      <Item
      	id={item.id}
        name={item.name}
        address={item.address}
        price={item.price}
      />
    )}
  />
)

export default CustomList
