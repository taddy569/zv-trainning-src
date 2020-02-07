export const doGetData = () => ({
	type: 'GET_STADIUMS',
})

export const doSearchNameData = (searchValue) => ({
	type: 'SEARCH_NAME',
	value: searchValue,
})