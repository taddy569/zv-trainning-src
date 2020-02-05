import React from 'react'
import { connect } from 'react-redux'

import List from '../../components/List'

const StadiumList = (props) => {
	if(props.stadiums !== false) {
		return <List data={props.stadiums}/>
	}
}

const mapStateToProps = (state) => ({
	stadiums: state.stadiums,
})

export default connect(
	mapStateToProps,
)(StadiumList)