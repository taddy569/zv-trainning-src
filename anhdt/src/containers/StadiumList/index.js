import { connect } from 'react-redux'

import StadiumList from '../../components/StadiumList'

const mapStateToProps = (state) => ({
	stadiums: state.stadiums,
})

export default connect(
	mapStateToProps,
)(StadiumList)