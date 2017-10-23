require('styles/first.css');

import React from 'react';
class First extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
  }

  handleItem(index) {
    let item = document.getElementsByClassName('service_item')
    let detail = document.getElementsByClassName('showDetail')
    for (let i = 0; i < item.length; i++ ) {
      item[i].id = ''
      detail[i].style.display='none'
    }
    item[index].id = 'itemShadowStyle'
    detail[index].style.display='block'
  }

  handleName() {
    // location.replace("/");
  }

  render() {
    let arr = [{
      imgUrl: '../images/ic_home_fgcs2.png',
      num: 200,
      name: '覆盖城市'
    }, {
      num: 5000,
      imgUrl: '../images/ic_drug.png',
      name: '合作药房'
    }, {
      num: '3万',
      imgUrl: '../images/ic_home_rzys3.png',
      name: '认证药师'
    }, {
      num: '2千万',
      imgUrl: '../images/ic_home_fwhy2.png',
      name: '服务会员'
    }]
    let userArr = [{
      name: '让慢病服务更专业',
      imgUrl: '../images/pic_sy_1.png',
      content: '从指标检测、顾客建档、用药指导、生活方式、风险评估、联合用药等多个维度辅助药师为顾客提供专业全面的慢病服务。',
      benefit: `吸引大量到店客流<br/>提升关联销售<br/>提升到店频次<br/>增强用户粘性`
    }, {
      name: '让会员营销更精准',
      imgUrl: '../images/pic_sy_２.png',
      content: '基于独家专利H-RFM用户模型对海量会员进行精准价值划分，制定差异化服务策略。' ,
      benefit: '全面了解运营状况<br/>把握精准营销<br/>提供健康服务<br/>培养高价值会员'
    }, {
      name: '让知识培训更有效',
      imgUrl: '../images/pic_sy_３.png',
      content: '深耕慢病一线的专业讲师团队+体系化阶梯性的培训课程+"学考用"三位一体的技能成长路径',
      benefit: '提升药师专业性<br/>确保队伍成长性<br/>打造阶梯化团队<br/>引导会员参与健康管理'
    }]
    return (
      <div className="first">
        <div className="banner">
          <div className="banner_title">源于技术 服务会员 驱动健康</div>
          <div className="banner_subtitle">深耕大数据和人工智能技术，为连锁药店、制药企业、社区医<br/>院、健康管理机构等B端用户提供健康管理和会员管理综合解决</div>
        </div>
        <div className="advantage">
          {
            arr.map((item, index) => {
              return <div className="advantage_item" key={index}>
                  <div className="item_left"><img src={item.imgUrl}></img></div>
                  <div className="item_right"><span className="right_num">{item.num}+</span><br/><span className='right_Name'>{item.name}</span></div>
                </div>
            })
          }
        </div>
        <div className='useTitle'>我用蓝信康</div>
        <div className='serviceList'>
          {
            userArr.map((item, index) => {
              return <div className="service_item" key={index} onMouseOver={() => this.handleItem(index)}>
                <div className='serviceImg' style={{backgroundImage: 'url(' + item.imgUrl + ')'}}></div>
                <div className='service_title'>{item.name}</div>
                <div className='service_content'>{item.content}</div>
                <div className='service_title'>能给药店带来的好处</div>
                <div className='service_benefit' dangerouslySetInnerHTML={{__html: item.benefit}}></div>
                <div className='showDetail'>查看详情</div>
              </div>
            })
          }
        </div>
        <div className='useTitle'>合作伙伴</div>
        <div className='cooperation_box'>
          <div className='coop_item'>
            <div className='coop_item_left'>药企</div>
            <div className='coop_item_right'><img src='../images/pic_yq.png'></img></div>
          </div>
          <div className='coop_item'>
            <div className='coop_item_left'>医院</div>
            <div className='coop_item_right'><img src='../images/pic_yy.png'></img></div>
          </div>
          <div className='coop_item1'>
            <div className='coop_item_left'>药店</div>
            <div className='coop_item_right'>
              <img src='../images/pic_yd.png'></img>
              <div className='showDetail'>查看详情</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default First;