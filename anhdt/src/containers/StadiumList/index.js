import { connect } from 'react-redux'

import StadiumList from '../../components/StadiumList'
import { doGetData } from '../../actions/homePage'

const mapStateToProps = (state) => ({
	stadiums: state.stadiums,
})

const mapDispatchToProps = (dispatch) => ({
	getData: () => { dispatch(doGetData()) }
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(StadiumList)