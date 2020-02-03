import React from 'react'
import PropTypes from 'prop-types'
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;


const Detail = props => {
    return (
        <Card
            style={{ borderLeft: 'none', borderRight: 'none' }}
            actions={[
                <><Icon type="setting" key="setting" /><span>Ahihi</span></>,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />,
            ]}  
        >
            <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={'Phuong Nguyen'}
                description="This is the description"
            />
            <span>25$</span>
        </Card>
    )
}

Detail.propTypes = {

}

export default Detail
