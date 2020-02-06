import styled from 'styled-components'

const Wrapper = styled.div`
	min-height: 15vh;
	padding: 20px;
`

const ChildWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 10px;
	justify-content: ${props => props.justifyContent};
	
`

const CustomCategory = styled.a`
	display: inline-block;
	margin: 0 10px;
`

export {
	Wrapper,
	ChildWrapper,
	CustomCategory,
} 