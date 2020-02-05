import React from 'react'

import StadiumList from '../StadiumList'
import PageHeader from '../../components/PageHeader'

const HomePage = () => {
	return (
		<div>
			<PageHeader title='Grounds'/>
			<StadiumList />
		</div>

	)
}

export default HomePage