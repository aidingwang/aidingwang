import React, { Component } from 'react'
import Item from '../../Item'
import './index.less'
export default class componentName extends Component {
    render() {
        return (
            <div>
                <ul className="item-ul">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </ul>
            </div>
        )
    }
}
