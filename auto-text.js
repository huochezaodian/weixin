'use strict';
let qa_index = `【1】狐狸慧赚与搜易贷的关系是什么？
【2】取现后多久到账？
【3】什么是“新手专享项目”？如何投资？
【4】实名认证无法通过，怎么解决？
【5】忘记交易密码，怎么办？
【6】投资后，资金可以撤回吗？
【7】如何解除或更换绑定银行卡？`;

let qa_content = {
    '1': `【1】狐狸慧赚与搜易贷的关系是什么？
狐狸慧赚与搜易贷为狐狸金服金融科技集团（狐狸金服）旗下两家全资子公司，是狐狸金服集团布局金融服务体系至关重要的两大业务平台。
狐狸慧赚定位于打造一站式互联网综合理财平台，覆盖多领域多种类投资品种，为互联网用户提供更加安全、更好收益、个性定制的综合理财服务。
搜易贷是中国领先的网络借贷平台，中国互联网金融协会理事单位，致力于推动中国信贷行业的市场化、平民化及高效化，搭建中国最大、用户体验最好的个人及中小企业的互联网借贷平台。`
    ,'2': `【2】取现后多久到账？
收到您的取现请求后，狐狸慧赚将在下1个工作日内（双休日或法定节假日顺延）处理完您的取现申请，请您注意查收。
为了您的资金安全，狐狸慧赚可能会对您的取现操作进行电话确认，请确保您的注册手机号可以接通。若连续3次电话无人接听，无法核实本次取现请求是否是本人操作，狐狸慧赚会拒绝本次取现请求，以保护账户资金安全。`
    ,'3': `【3】什么是“新手专享项目”？如何投资？
1）“新手专享”是为新手用户定制的稳定高收益增值产品。
2）新手用户购买“新手专享”产品最高限额10,000元，每人仅有一次投资机会。
3）新手专享产品不可使用红包和加息券。`
    ,'4': `【4】实名认证无法通过，怎么解决？
狐狸慧赚实名认证与公安系统联网，如果姓名和身份证号码信息不一致，就会导致无法通过。

以下几种情况，将无法自行完成实名认证：
· 名字中带有繁体字
· 曾经改过名字
· 军人转业、复员换的身份证
· 做过户籍变动`
    ,'5': `【5】忘记交易密码，怎么办？
您可以通过【我的账户】-【安全中心】-【找回交易密码】功能找回。

解决办法：
· 发送用户名，身份证正反面照片，本人手持身份证正面照片，户口本首页，户主页，本人页照片，发到客服邮箱（kefu@huli.com），并且在身份证上注明“仅供狐狸慧赚实名认证使用”，收到邮件后我们会提交后台审核认证。收到邮件后提交后台，认证完成后给用户回邮件。

· 有问题可致电客服 400-8989-666，周一至周日，9:00-18:00（法定节假日除外）。`
    ,'6': `【6】投资后，资金可以撤回吗？
投资人成功认购理财产品后，认购资金不可以撤回。如果您需要变现持有的理财产品，按照相应产品转让规则使用转让功能（部分产品可能不支持转让）。`
    ,'7': `【7】如何解除或更换绑定银行卡？
如果您通过手机，使用第三方支付充值并绑定银行卡，即“快捷卡”。为了您的账户安全，取现只能使用您的“快捷卡”，其他取现银行卡将自动停止使用。使用“快捷卡”取现，审核时间更快，操作更安全。
如遇特殊情况，需要解绑或更换“快捷卡”，请至手机端【我的账户】-【安全中心】-【银行卡】中进行解绑操作。
解绑“快捷卡”之后再进行取现时，为了您的资金安全，请至手机端【我的账户】-【安全中心】-【银行卡】再绑定一张“快捷卡”方可继续取现。`
};

let content = {};

for(let i in qa_content){
    content[i] = qa_content[i].replace(/[\r\n]/g, '\n')
}
module.exports = Object.assign({
    qa_index: qa_index.replace(/[\r\n]/g, '\n'),
    subscribe: '欢迎关注我的公众号.',
    default: 'Sorry, 没能找到您想要的东西😭',
    bindtext: `绑定微信订阅号跟您的狐狸慧赚账号，在微信充值、投资更方便哦！\n\n已经有狐狸慧赚账户，请<a href="login_url">点击这里</a>绑定。\n\n新用户<a href="regist_url">点击这里</a>注册。`
}, content);