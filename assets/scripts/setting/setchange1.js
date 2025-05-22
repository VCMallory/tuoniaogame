// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
         offback2: cc.Node,//游戏音效
        

        offlable2:cc.Node,//游戏音效
       

        spriteFrames: {
        default: [],
        type: cc.SpriteFrame,
        tooltip: '点击显示off或者on'
    },

        offbackbool:false,//游戏音效
      

        offback_node2: cc.Node,//游戏音效
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    onclickoff1(){
        if(this.offbackbool){
            this.offback2.getComponent(cc.Sprite).spriteFrame = this.spriteFrames[1];
            this.offbackbool=false;
            this.offlable2.getComponent(cc.Label).string = "OFF";
            this.offback_node2.x-=80;
            this.offlable2.x+=60;

        }else{
            this.offback2.getComponent(cc.Sprite).spriteFrame = this.spriteFrames[0];
            this.offbackbool=true;
            this.offlable2.getComponent(cc.Label).string = "ON";
            this.offback_node2.x+=80;
            this.offlable2.x-=60;
        }
    }
    // update (dt) {},
});
