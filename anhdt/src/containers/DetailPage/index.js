import React from 'react'
import { Icon, Divider } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import PageHeader from '../../components/PageHeader'
import WrapperDetailHeader from './WrapperDetailHeader'

import LeftMain from './MainDetail/LeftMain'
import RightMain from './MainDetail/RightMain'

import LeftSub from './SubDetail/LeftSub'
import RightSub from './SubDetail/RightSub'

import DetailRow from './DetailRow'

import ImgSrc from '../../assets/images/wembley.jpg'

const DetailPage = (props) => {

	const params = props.match.params.id.substring(1)

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

const mapStateToProps = (state) => ({
	stadiums: state.stadiums,
})

export default connect(mapStateToProps)(DetailPage)

			
