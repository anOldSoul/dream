require('styles/App.css');
require('styles/home.css');
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import App from './Game';
import Wufang from './wufang';
import First from './first';
import Product from './product-center/chronicDisease';

import React from 'react';
class Top extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // location.replace("/product");
  }

  handleName(index) {
    let item = document.getElementsByClassName('menu_item')
    for (let i = 0; i < item.length; i++ ) {
      item[i].id = ''
    }
    item[index].id = 'testStyle'
  }

  handleBoard() {
    location.replace("/board");
  }

  render() {
    return (
      <div className="home">
        <div className="header">
          <div className="logo"><img src="../images/logo.png "></img></div>
          <div className="menu">
            <Link to='/first' className="menu_item" id='testStyle' onClick={() => this.handleName(0)}>首页</Link>
            <Link to='/product' className="menu_item" onClick={() => this.handleName(1)}>产品中心</Link>
            <div className="menu_item" onClick={() => this.handleName(2)}>行业方案</div>
            <div className="menu_item" onClick={() => this.handleName(3)}>关于我们</div>
            <div className="menu_item" onClick={() => this.handleName(4)}>联系我们</div>
          </div>
          <div className="login_btn">登录</div>
        </div>
        <Route path="/board" component={App}/>
        <Route path="/wufang" component={Wufang}/>
        <Route path="/product" component={Product}/>
        <Route path="/first" component={First}/>
        <div className='bottom'>
          <div className='bottomList'>
            <div className='bottom_item'>
              <img src='../images/ewm_1.png'></img>
              <div className='codeName'>官方微信</div>
            </div>
            <div className='bottom_item'>
              <img src='../images/ewm_2.png'></img>
              <div className='codeName'>个人版APP</div>
            </div>
            <div className='bottom_item'>
              <img src='../images/ewm_3.png'></img>
              <div className='codeName'>药店版APP</div>
            </div>
            <div className='bottom_item'>
              <img src='../images/ewm_4.png'></img>
              <div className='codeName'>医生版APP</div>
            </div>
          </div>
          <div className='company'>上海科瓴医疗科技有限公司</div>
          <div className='company'>蓝信康®是上海科瓴旗下移动医疗慢病服务品牌</div>
          <div className='contact'>电话：86-21-61400667 丨 邮箱：customer@carelinker.com 丨地址： 上海市杨浦区政府路18号波司登大厦906室</div>
          <div className='copyRight'>蓝信康 版权声明Copyright ©2014-2017 all rights reserved. 浙ICP备14022219号-2</div>
        </div>
      </div>
    );
  }
}
export default Top;