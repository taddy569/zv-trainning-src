import styled from 'styled-components'

const ChildWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 10px;
	justify-content: ${props => props.justifyContent};

	
`

export default ChildWrapper