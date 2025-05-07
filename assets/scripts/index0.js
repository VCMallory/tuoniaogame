// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

        // 在编辑器里填入你要切换到的场景名
        targetScene: {
            default: '',
            tooltip: ''
        }
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    //  onLoad () {
    //     this.node.on('touchend', this.onclick, this);
    //  },

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

    // onDestroy () {
    //     // 记得取消监听，防止内存泄漏
    //     this.node.off('touchend', this.onclick, this);
    // }
});
