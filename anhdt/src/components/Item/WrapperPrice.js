import styled from 'styled-components'

const WrapperPrice = styled.p`
	color: #58ac0d;
	font-size: 20px;
	font-weight: bold;	

	&:before {
    content: "$";
  }

  &:after {
    content: " /hour";
  }
`

export default WrapperPrice