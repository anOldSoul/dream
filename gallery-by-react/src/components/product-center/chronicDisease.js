require('styles/chronicDisease.css');

import React from 'react';
class Wufang extends React.Component {
  constructor() {
    super();
  }

  handleName() {
    location.replace("/");
  }

  render() {
    let moduleArr = [{
      imgUrl: '../images/jiance.png',
      name: '检测套装'
    }, {
      imgUrl: '../images/yaoxue.png',
      name: '药学服务'
    }, {
      imgUrl: '../images/xuanjiao.png',
      name: '宣教干预'
    }, {
      imgUrl: '../images/huiyuan.png',
      name: '会员沟通'
    }, {
      imgUrl: '../images/jiating.png',
      name: '家庭关爱'
    }]
    return (
      <div className='product_center'>
        <div className="product_banner">
          <div className='product_banner_left'>
            <div className='product_banner_title'>智能硬件+手持移动端+云端服务</div>
            <div className='product_banner_subtitle'>零售药房慢病管理综合解决方案</div>
          </div>
          <div className='banner_right'>
            <div className='banner_img'><img src='../images/banner icon_慢病服务.png'></img></div>
          </div>
        </div>
        <div className='useTitle'>慢病会员服务体系五大功能模块</div>
        <div className='modules'>
          {
            moduleArr.map((item, index) => {
              return <div className="modules_item" key={index}>
                <div className='moduleImg'><img src={item.imgUrl}></img></div>
                <div className='moduleName'>{item.name}</div>
              </div>
            })
          }
        </div>
        <div className='module_box'>
          <div className='title_box'>            
            <div className='title'>智能的检测套装</div>
            <div className='subTitle'>涵盖三高及常见慢病项目检测，设备均内置智能传输模块，数据自动存储至云端。</div>
          </div>
          <div className='moduleboxImg'><img src='../images/检测套装.png'></img></div>
        </div>
        <div className='useTitle'>慢病会员服务体系五大功能模块</div>
      </div>
    );
  }
}
export default Wufang;