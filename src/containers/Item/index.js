import React, { Component } from 'react'
import itemSrc from '../../assets/img/item.jpg'
import './index.less'
export default class Item extends Component {
    render() {
        return (
            <li className="item-li">
                <a className='item-img'><img src={itemSrc}/></a>
                <span className="item-name">生日礼物女闺蜜送男友朋友情侣新年特别创意实用的年会网红抖音小</span>
                <p className="item-info">
                    <span className="rmb">¥75.00</span>
                    <span className="num">12个喜欢</span>
                </p>
            </li>
        )
    }
}
