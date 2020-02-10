import { connect } from 'react-redux'

import StadiumList from '../../components/StadiumList'
import { getDataStadium } from '../../reducers/homePageReducer'

const mapStateToProps = (state) => ({
	stadiums: state.stadiums,
})

// const mapDispatchToProps = (dispatch) => ({
// 	getData: () => { dispatch(doGetData()) }
// })

const mapDispatchToProps = {
	getData: () => getDataStadium()
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(StadiumList)