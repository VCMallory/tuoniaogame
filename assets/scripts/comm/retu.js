// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        targetScene: {
            default: '',
            tooltip: ''
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    onclick(){
        if (this.targetScene) {
            cc.director.loadScene(this.targetScene);
        } else {
            cc.warn('ImageClickLoader: 请在属性检查器里填写 targetScene');
        }
    }
    // update (dt) {},
});
