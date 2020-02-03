import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Rate } from 'antd'
import Detail from './Detail'
import Comment from './Comment/index'

const Info = props => {
    return (
        <div>
            <Row>
                <Col span={16}><img src={'https://dinhtung.net/wp-content/uploads/2018/09/cho-thue-san-banh-mini.jpg'} /></Col>
                <Col span={8}>
                    <h1>Old aTranfford Stadium</h1>
                    <span>Sir Matt Busby Way, Stretford</span>
                    <span>Manchester M16 0RA, UK</span>
                    <Rate allowHalf defaultValue={2.5} />
                    <Detail />
                </Col>
            </Row>
            <Row>
                <Col span={16}>
                    <Comment />
                </Col>
                <Col span={8}>
                    {/* <History /> */}
                </Col>
            </Row>
        </div>
    )
}

Info.propTypes = {

}

export default Info
