// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
      // 要切换的帧列表，在编辑器里填（拖）多个 SpriteFrame
      spriteFrames: {
        default: [],
        type: cc.SpriteFrame,
        tooltip: '左右滑动要显示的图片列表'
    },
    // 默认滑动触发阈值（像素）
    swipeThreshold: 50,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onLoad () {
        // 当前索引和触摸起点
        this.currentIndex = 0;
        this._startX = 0;

        // 拿到 Sprite 组件
        this._sprite = this.getComponent(cc.Sprite);

        // 注册触摸事件
        this.node.on('touchstart', this._onTouchStart, this);
        this.node.on('touchend',   this._onTouchEnd,   this);
    },

    _onTouchStart (event) {
        // 记录触摸起始的屏幕 X 坐标
        this._startX = event.getLocationX();
    },

    _onTouchEnd (event) {
        const endX = event.getLocationX();
        const diffX = endX - this._startX;

        // 未超过阈值，不切换
        if (Math.abs(diffX) < this.swipeThreshold) return;

        if (diffX > 0) {
            this._showPrevious();
        } else {
            this._showNext();
        }
    },

    _showNext () {
        if (this.spriteFrames.length === 0) return;
        this.currentIndex = (this.currentIndex + 1) % this.spriteFrames.length;
        this._sprite.spriteFrame = this.spriteFrames[this.currentIndex];
    },

    _showPrevious () {
        if (this.spriteFrames.length === 0) return;
        this.currentIndex = (this.currentIndex - 1 + this.spriteFrames.length) % this.spriteFrames.length;
        this._sprite.spriteFrame = this.spriteFrames[this.currentIndex];
    },

    onDestroy () {
        // 解绑事件
        this.node.off('touchstart', this._onTouchStart, this);
        this.node.off('touchend',   this._onTouchEnd,   this);
    },
    start () {

    },

    // update (dt) {},
});
