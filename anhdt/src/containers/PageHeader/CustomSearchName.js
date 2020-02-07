import { connect } from 'react-redux'

import CustomSearchName from '../../components/PageHeader/CustomSearchName'
import { doSearchNameData } from '../../actions/homePage'

const mapDispatchToProps = (dispatch) => ({
	handleSearch: (searchValue) => { dispatch(doSearchNameData(searchValue)) }
})

export default connect(
	null,
	mapDispatchToProps,
)(CustomSearchName)