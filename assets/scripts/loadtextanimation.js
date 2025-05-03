// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        index: {
            default: 0,
            type: cc.Integer
        },
        childNode1: cc.Node,
        childNode2: cc.Node,
        childNode3: cc.Node
        // index: 0
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

     onLoad () {

        this.schedule(this.onTimeer,0.1);
     },

    start () {
        //  this.childNode1 = this.node.getChildByName("point1");
        //  this.childNode2 = this.node.getChildByName("point2");
        //  this.childNode3 = this.node.getChildByName("point3");
         cc.log('显示:'+this.childNode1);
        if (this.childNode1&&this.childNode2&&this.childNode3) {
            this.childNode1.active = true; // 隐藏
            this.childNode2.active = false; // 隐藏
            this.childNode3.active = false; // 显示

        }
        
    },
    onTimeer(){
        this.index++;
        if (this.childNode1&&this.childNode2&&this.childNode3) {
            if(this.index>=0&&this.index<=5){
                this.childNode1.active = true; // 隐藏
                this.childNode2.active = false; // 隐藏
                this.childNode3.active = false; // 显示
            }else if(this.index>=6&&this.index<=10){
                this.childNode1.active = true; // 隐藏
                this.childNode2.active = true; // 隐藏
                this.childNode3.active = false; // 显示
            }else if(this.index>=11&&this.index<=15){
                this.childNode1.active = true; // 隐藏
                this.childNode2.active = true; // 隐藏
                this.childNode3.active = true; // 显示
                
            }else{
                this.index=-1;
            }
          
        }
    }

   
});
