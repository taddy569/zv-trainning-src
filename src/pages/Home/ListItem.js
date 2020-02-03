import React from 'react'
import { Card, Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Link, Redriect } from 'react-router-dom';
const { Meta } = Card;

const ListItem = props => {
    let history = useHistory();
    const routeChange = () => {
        history.push('/info')
    }
    return (
        <Card
            onClick={() => routeChange()}
            hoverable
            style={{ width: 360 }}
            cover={<img alt="example" src={props.img} />}
        >
            <Row>
                <Col span={18}>
                    <Meta title={props.name} description={props.address} />
                </Col>
                <Col span={6} style={{ textAlign: 'center' }}>
                    <span>{props.price}</span>
                </Col>
            </Row>
        </Card>
    )
}

ListItem.propTypes = {

}

export default ListItem
