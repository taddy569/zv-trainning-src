import { connect } from 'react-redux'

import CustomSearchName from '../../components/PageHeader/CustomSearchName'
import { 
	doFilterPriceData,
	doSortData,
	doSearchNameData,
} from '../../actions/homePage'

const mapDispatchToProps = (dispatch) => ({
	handleFilter: (filterValue) => { dispatch(doFilterPriceData(filterValue)) },
	handleSort: (sortValue) => { dispatch(doSortData(sortValue)) },
	handleSearch: (searchValue) => { dispatch(doSearchNameData(searchValue)) },
})

export default connect(
	null,
	mapDispatchToProps,
)(CustomSearchName)