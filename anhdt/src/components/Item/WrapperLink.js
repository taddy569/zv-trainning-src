import styled from 'styled-components'
import { Link } from 'react-router-dom'

const WrapperLink = styled(Link)`
	text-decoration: none;
	color: #808080;

	&:hover {
    text-decoration: underline;
  }
`

export default WrapperLink