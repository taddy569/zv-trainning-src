import React, { Component } from 'react';
import List from '../components/List/List';

export default class home extends Component {
    render() {
        return (
            <div>
                <List 
                imgURL="https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg" title="Old" discription='abc' price='25'
                ></List>
            </div>
        )
    }
}
