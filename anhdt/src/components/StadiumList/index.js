import React from 'react'

import List from '../List'

const StadiumList = (props) => {
	if(props.stadiums !== false) {
		return <List data={props.stadiums}/>
	} else {
		return <p>No data available</p>
	}
}

export default StadiumList