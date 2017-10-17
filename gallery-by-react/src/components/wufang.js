require('normalize.css/normalize.css');
require('styles/App.css');
import utils from '../utils';
// import { HashRouter as Router, Route } from 'react-router-dom';

import React from 'react';
class Wufang extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let param = {
      mStId: undefined,
      uNm: undefined,
      platform: 'web',
      method: 'get',
      path: '/clCrm/api/crm/users/user/msCards',
      sign: '12f90f38dab31ea7575ee637a44151d9',
      vCode: 30121,
      vType: 'web',
      token: '000'
    }
    let url = 'https://platform.carelinker.com/clApi/entry';
    let url1 = 'https://testc.duolunxc.com/mobileRest/school/myself/myselfInfo.do'

    utils.post(url, param, result => {
    })

    utils.get(url1, param, result => {
    })
  }

  handleName() {
    location.replace("/");
  }

  render() {
    return (
      <div>
        <div onClick={() => this.handleName()}>吴芳</div>
      </div>
    );
  }
}
export default Wufang;