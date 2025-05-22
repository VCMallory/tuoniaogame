// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        offback1: cc.Node,//游戏音效
        

        offlable1:cc.Node,//游戏音效
       

        spriteFrames: {
        default: [],
        type: cc.SpriteFrame,
        tooltip: '点击显示off或者on'
    },

        offbackbool:true,//游戏音效
      

        offback_node1: cc.Node,//游戏音效
      
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

         // 拿到 Sprite 组件
        // this.offback1 = this.getComponent(cc.Sprite);
        //  this.onback2 = this.getComponent(cc.Sprite);
    },

    start () {

    },

    onclickoff1(){
        if(this.offbackbool){
            this.offback1.getComponent(cc.Sprite).spriteFrame = this.spriteFrames[1];
            this.offbackbool=false;
            this.offlable1.getComponent(cc.Label).string = "OFF";
            this.offback_node1.x-=80;
            this.offlable1.x+=60;

        }else{
            this.offback1.getComponent(cc.Sprite).spriteFrame = this.spriteFrames[0];
            this.offbackbool=true;
            this.offlable1.getComponent(cc.Label).string = "ON";
            this.offback_node1.x+=80;
            this.offlable1.x-=60;
        }
    }
    // update (dt) {},
});
