let openid = 'oRwNOt4Y99tZdtYBO1-rasl7CCbk';

let results = [{ subscribe: true,
  update_time: 'Fri Jun 19 2015 21:37:16 GMT+0800 (CST)',
  nickname: '一念^执着',
  sex: 1,
  language: 'zh_CN',
  city: 'Fengtai',
  province: 'Beijing',
  country: 'China',
  headimgurl: 'http://wx.qlogo.cn/mmopen/jepUOmWgoPhAOR4yw6PDsAajflic0qq8BUWIg6Cp5TI82GsQysqomLlLWzQW31cRyWF2eNpQtuRLoW2xhnia65dLXSPh6iat5hC/0',
  subscribe_time: 'Tue Aug 08 2017 20:10:37 GMT+0800 (CST)',
  openid_sub: 'oV0o8uIhIdIdan3TgpQkrj4LZkBA',
  __v: 0,
  enable: true,
  souyidai_username: '182*****958',
  souyidai_uid: 3520891,
  openid_serve: 'oRwNOt4Y99tZdtYBO1-rasl7CCbk',
  _id: '55841b0c4304683d1bf329e0' 
}];

let len = results.length >= 2 ? 2 : results.length;
for(let i = 0; i < len; i++){
  let item = results[i];
  console.log(`[page myAccountMoney ${i}], openid_serve:${item.openid_serve}, enable:${item.enable}, souyidai_uid:${item.souyidai_uid}`);
  if(item.openid_serve !== undefined && item.enable && item.souyidai_uid){
    console.log(`[page myAccountMoney] souyidai_uid:${item.souyidai_uid}`)
    // common.request('http://m.huli.com/wap/1.4/mycapital/chart', {}, {
    //       'cookie': `syd_auth=${item.souyidai_uid}%7C%7C1%7C%7C%7C%7C1`
    // })
    // .then((results) => {
    //   res.send(results.body);
    // });
  }
}