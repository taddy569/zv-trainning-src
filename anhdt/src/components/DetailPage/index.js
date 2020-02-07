import React from 'react'
import { Icon, Divider } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import PageHeader from '../PageHeader'
import { WrapperDetailHeader } from './DetailPage.style'

import LeftMain from './LeftMain'
import RightMain from './RightMain'

import LeftSub from './LeftSub'
import RightSub from './RightSub'

import DetailRow from './DetailRow'

import ImgSrc from '../../assets/images/wembley.jpg'

const DetailPage = (props) => {

	const params = props.match.params.id
	const itemData = props.stadiums.filter(item => item.id == params)

	const CustomLeftMain = <LeftMain img={ImgSrc} />
	const CustomRightMain = <RightMain name={itemData[0].name} address={itemData[0].address} price={itemData[0].price} />
	const CustomLeftSub = <LeftSub />
	const CustomRightSub = <RightSub />

	return (
		<div>
			<WrapperDetailHeader>
				<Link to="/">
					<Icon
				  	type="arrow-left"
				  	style={{
						fontSize: '25px',
					}} />
				</Link>
				
			  <PageHeader
					title={"Ground Info"}
					onBack={() => window.history.back()}
					backIcon={<Icon type="arrow-left" />}
				/>
			</WrapperDetailHeader>

			<DetailRow
				leftComponent={CustomLeftMain}
				rightComponent={CustomRightMain}
			/>

			<Divider />

			<DetailRow
				leftComponent={CustomLeftSub}
				rightComponent={CustomRightSub}
			/>

		</div>
	)
}

export default DetailPage

			
