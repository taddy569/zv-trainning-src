import React, { Component } from 'react';
import { Card} from 'antd';
const { Meta } = Card;


export default function List({imgURL,title,discription,price}) {
    return (
        <Card className='Card'
        hoverable
        style={{ width: 
        350}}
        cover={<img alt="stradium" src={imgURL} />}
         >
        <Meta title={title}
         description={discription}
         price={price} />
    </Card>
    )
}
