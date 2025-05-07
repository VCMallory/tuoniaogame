// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        toggle: {
            type: cc.Toggle,
            default: null,
            tooltip: '同意协议的 Toggle'
        },
       
        wechatButton: {
            type: cc.Button,
            default: null,
            tooltip: '需要同意后才可点击的登录按钮'
        },
        phoneButton: {
            type: cc.Button,
            default: null,
            tooltip: '需要同意后才可点击的登录按钮'
        },
        agreementUrl: {
            default: 'https://yourdomain.com/user-agreement.html'
        },
        privacyUrl: {
            default: 'https://yourdomain.com/privacy-policy.html'
        },
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        // 1. 监听 RichText 的 link 事件
       // this.richText.node.on(cc.RichText.EventType.LINK, this._onLinkClick, this);
        // 2. 监听 Toggle 状态变化
        this.toggle.node.on('toggle', this._onToggleChanged, this);
        // 初始化按钮状态
        this._onToggleChanged();

     },

    start () {

    },
    _onToggleChanged () {
        // 同意后才允许点击登录
        this.wechatButton.interactable = this.toggle.isChecked;
        this.phoneButton.interactable = this.toggle.isChecked;
    },

    onDestroy () {
        //this.richText.node.off(cc.RichText.EventType.LINK, this._onLinkClick, this);
        this.toggle.node.off('toggle', this._onToggleChanged, this);
    },

    // update (dt) {},
});
