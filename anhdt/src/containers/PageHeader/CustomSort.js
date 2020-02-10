import { connect } from 'react-redux'

import CustomSort from '../../components/PageHeader/CustomSort'
import { doSortData } from '../../actions/homePage'

const mapDispatchToProps = (dispatch) => ({
	handleSort: (sortValue) => { dispatch(doSortData(sortValue)) }
})

export default connect(
	null,
	mapDispatchToProps,
)(CustomSort)