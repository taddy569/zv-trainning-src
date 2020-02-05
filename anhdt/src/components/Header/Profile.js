import React from 'react'
import styled from 'styled-components'
import { Avatar } from 'antd'

// const ProfileWrapper = styled.div`
// 	background-color: red;
// `

const Profile = () => (
	<div>
    <Avatar size={64} icon="user" style={{
    	'backgroundColor': 'white'
    }}/>
  </div>
)

export default Profile