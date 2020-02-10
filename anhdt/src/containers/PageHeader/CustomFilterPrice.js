import { connect } from 'react-redux'

import CustomFilterPrice from '../../components/PageHeader/CustomFilterPrice'

import { doFilterPriceData } from '../../actions/homePage'

const mapDispatchToProps = (dispatch) => ({
	handleFilter: (filterValue) => { dispatch(doFilterPriceData(filterValue)) },
})

export default connect(
	null,
	mapDispatchToProps,
)(CustomFilterPrice)