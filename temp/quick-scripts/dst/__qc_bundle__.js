
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/comm/colorfonts');
require('./assets/scripts/comm/retu');
require('./assets/scripts/load/loadtextanimation');
require('./assets/scripts/rule/isclose');
require('./assets/scripts/rule/isshow');
require('./assets/scripts/rule/rule');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/rule/rule.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e51e5TDqrZNg5qA9EZ/0g2t', 'rule');
// scripts/rule/rule.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  "extends": cc.Component,
  properties: {
    // 要切换的帧列表，在编辑器里填（拖）多个 SpriteFrame
    spriteFrames: {
      "default": [],
      type: cc.SpriteFrame,
      tooltip: '左右滑动要显示的图片列表'
    },
    // 默认滑动触发阈值（像素）
    swipeThreshold: 50
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  onLoad: function onLoad() {
    // 当前索引和触摸起点
    this.currentIndex = 0;
    this._startX = 0;

    // 拿到 Sprite 组件
    this._sprite = this.getComponent(cc.Sprite);

    // 注册触摸事件
    this.node.on('touchstart', this._onTouchStart, this);
    this.node.on('touchend', this._onTouchEnd, this);
  },
  _onTouchStart: function _onTouchStart(event) {
    // 记录触摸起始的屏幕 X 坐标
    this._startX = event.getLocationX();
  },
  _onTouchEnd: function _onTouchEnd(event) {
    var endX = event.getLocationX();
    var diffX = endX - this._startX;

    // 未超过阈值，不切换
    if (Math.abs(diffX) < this.swipeThreshold) return;
    if (diffX > 0) {
      this._showPrevious();
    } else {
      this._showNext();
    }
  },
  _showNext: function _showNext() {
    if (this.spriteFrames.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.spriteFrames.length;
    this._sprite.spriteFrame = this.spriteFrames[this.currentIndex];
  },
  _showPrevious: function _showPrevious() {
    if (this.spriteFrames.length === 0) return;
    this.currentIndex = (this.currentIndex - 1 + this.spriteFrames.length) % this.spriteFrames.length;
    this._sprite.spriteFrame = this.spriteFrames[this.currentIndex];
  },
  onDestroy: function onDestroy() {
    // 解绑事件
    this.node.off('touchstart', this._onTouchStart, this);
    this.node.off('touchend', this._onTouchEnd, this);
  },
  start: function start() {} // update (dt) {},
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccnVsZVxccnVsZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNwcml0ZUZyYW1lcyIsInR5cGUiLCJTcHJpdGVGcmFtZSIsInRvb2x0aXAiLCJzd2lwZVRocmVzaG9sZCIsIm9uTG9hZCIsImN1cnJlbnRJbmRleCIsIl9zdGFydFgiLCJfc3ByaXRlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwibm9kZSIsIm9uIiwiX29uVG91Y2hTdGFydCIsIl9vblRvdWNoRW5kIiwiZXZlbnQiLCJnZXRMb2NhdGlvblgiLCJlbmRYIiwiZGlmZlgiLCJNYXRoIiwiYWJzIiwiX3Nob3dQcmV2aW91cyIsIl9zaG93TmV4dCIsImxlbmd0aCIsInNwcml0ZUZyYW1lIiwib25EZXN0cm95Iiwib2ZmIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1Y7SUFDQUMsWUFBWSxFQUFFO01BQ1osV0FBUyxFQUFFO01BQ1hDLElBQUksRUFBRUwsRUFBRSxDQUFDTSxXQUFXO01BQ3BCQyxPQUFPLEVBQUU7SUFDYixDQUFDO0lBQ0Q7SUFDQUMsY0FBYyxFQUFFO0VBQ2hCLENBQUM7RUFFRDtFQUVBO0VBRUFDLE1BQU0sV0FBQUEsT0FBQSxFQUFJO0lBQ047SUFDQSxJQUFJLENBQUNDLFlBQVksR0FBRyxDQUFDO0lBQ3JCLElBQUksQ0FBQ0MsT0FBTyxHQUFHLENBQUM7O0lBRWhCO0lBQ0EsSUFBSSxDQUFDQyxPQUFPLEdBQUcsSUFBSSxDQUFDQyxZQUFZLENBQUNiLEVBQUUsQ0FBQ2MsTUFBTSxDQUFDOztJQUUzQztJQUNBLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ0MsYUFBYSxFQUFFLElBQUksQ0FBQztJQUNwRCxJQUFJLENBQUNGLElBQUksQ0FBQ0MsRUFBRSxDQUFDLFVBQVUsRUFBSSxJQUFJLENBQUNFLFdBQVcsRUFBSSxJQUFJLENBQUM7RUFDeEQsQ0FBQztFQUVERCxhQUFhLFdBQUFBLGNBQUVFLEtBQUssRUFBRTtJQUNsQjtJQUNBLElBQUksQ0FBQ1IsT0FBTyxHQUFHUSxLQUFLLENBQUNDLFlBQVksRUFBRTtFQUN2QyxDQUFDO0VBRURGLFdBQVcsV0FBQUEsWUFBRUMsS0FBSyxFQUFFO0lBQ2hCLElBQU1FLElBQUksR0FBR0YsS0FBSyxDQUFDQyxZQUFZLEVBQUU7SUFDakMsSUFBTUUsS0FBSyxHQUFHRCxJQUFJLEdBQUcsSUFBSSxDQUFDVixPQUFPOztJQUVqQztJQUNBLElBQUlZLElBQUksQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUNkLGNBQWMsRUFBRTtJQUUzQyxJQUFJYyxLQUFLLEdBQUcsQ0FBQyxFQUFFO01BQ1gsSUFBSSxDQUFDRyxhQUFhLEVBQUU7SUFDeEIsQ0FBQyxNQUFNO01BQ0gsSUFBSSxDQUFDQyxTQUFTLEVBQUU7SUFDcEI7RUFDSixDQUFDO0VBRURBLFNBQVMsV0FBQUEsVUFBQSxFQUFJO0lBQ1QsSUFBSSxJQUFJLENBQUN0QixZQUFZLENBQUN1QixNQUFNLEtBQUssQ0FBQyxFQUFFO0lBQ3BDLElBQUksQ0FBQ2pCLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQ0EsWUFBWSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUNOLFlBQVksQ0FBQ3VCLE1BQU07SUFDdEUsSUFBSSxDQUFDZixPQUFPLENBQUNnQixXQUFXLEdBQUcsSUFBSSxDQUFDeEIsWUFBWSxDQUFDLElBQUksQ0FBQ00sWUFBWSxDQUFDO0VBQ25FLENBQUM7RUFFRGUsYUFBYSxXQUFBQSxjQUFBLEVBQUk7SUFDYixJQUFJLElBQUksQ0FBQ3JCLFlBQVksQ0FBQ3VCLE1BQU0sS0FBSyxDQUFDLEVBQUU7SUFDcEMsSUFBSSxDQUFDakIsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDQSxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQ04sWUFBWSxDQUFDdUIsTUFBTSxJQUFJLElBQUksQ0FBQ3ZCLFlBQVksQ0FBQ3VCLE1BQU07SUFDakcsSUFBSSxDQUFDZixPQUFPLENBQUNnQixXQUFXLEdBQUcsSUFBSSxDQUFDeEIsWUFBWSxDQUFDLElBQUksQ0FBQ00sWUFBWSxDQUFDO0VBQ25FLENBQUM7RUFFRG1CLFNBQVMsV0FBQUEsVUFBQSxFQUFJO0lBQ1Q7SUFDQSxJQUFJLENBQUNkLElBQUksQ0FBQ2UsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUNiLGFBQWEsRUFBRSxJQUFJLENBQUM7SUFDckQsSUFBSSxDQUFDRixJQUFJLENBQUNlLEdBQUcsQ0FBQyxVQUFVLEVBQUksSUFBSSxDQUFDWixXQUFXLEVBQUksSUFBSSxDQUFDO0VBQ3pELENBQUM7RUFDRGEsS0FBSyxXQUFBQSxNQUFBLEVBQUksQ0FFVCxDQUFDLENBRUQ7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAvLyDopoHliIfmjaLnmoTluKfliJfooajvvIzlnKjnvJbovpHlmajph4zloavvvIjmi5bvvInlpJrkuKogU3ByaXRlRnJhbWVcbiAgICAgIHNwcml0ZUZyYW1lczoge1xuICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgIHRvb2x0aXA6ICflt6blj7Pmu5HliqjopoHmmL7npLrnmoTlm77niYfliJfooagnXG4gICAgfSxcbiAgICAvLyDpu5jorqTmu5Hliqjop6blj5HpmIjlgLzvvIjlg4/ntKDvvIlcbiAgICBzd2lwZVRocmVzaG9sZDogNTAsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgLy8g5b2T5YmN57Si5byV5ZKM6Kem5pG46LW354K5XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5fc3RhcnRYID0gMDtcblxuICAgICAgICAvLyDmi7/liLAgU3ByaXRlIOe7hOS7tlxuICAgICAgICB0aGlzLl9zcHJpdGUgPSB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuXG4gICAgICAgIC8vIOazqOWGjOinpuaRuOS6i+S7tlxuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoZW5kJywgICB0aGlzLl9vblRvdWNoRW5kLCAgIHRoaXMpO1xuICAgIH0sXG5cbiAgICBfb25Ub3VjaFN0YXJ0IChldmVudCkge1xuICAgICAgICAvLyDorrDlvZXop6bmkbjotbflp4vnmoTlsY/luZUgWCDlnZDmoIdcbiAgICAgICAgdGhpcy5fc3RhcnRYID0gZXZlbnQuZ2V0TG9jYXRpb25YKCk7XG4gICAgfSxcblxuICAgIF9vblRvdWNoRW5kIChldmVudCkge1xuICAgICAgICBjb25zdCBlbmRYID0gZXZlbnQuZ2V0TG9jYXRpb25YKCk7XG4gICAgICAgIGNvbnN0IGRpZmZYID0gZW5kWCAtIHRoaXMuX3N0YXJ0WDtcblxuICAgICAgICAvLyDmnKrotoXov4fpmIjlgLzvvIzkuI3liIfmjaJcbiAgICAgICAgaWYgKE1hdGguYWJzKGRpZmZYKSA8IHRoaXMuc3dpcGVUaHJlc2hvbGQpIHJldHVybjtcblxuICAgICAgICBpZiAoZGlmZlggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9zaG93UHJldmlvdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3dOZXh0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX3Nob3dOZXh0ICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlRnJhbWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9ICh0aGlzLmN1cnJlbnRJbmRleCArIDEpICUgdGhpcy5zcHJpdGVGcmFtZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLl9zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUZyYW1lc1t0aGlzLmN1cnJlbnRJbmRleF07XG4gICAgfSxcblxuICAgIF9zaG93UHJldmlvdXMgKCkge1xuICAgICAgICBpZiAodGhpcy5zcHJpdGVGcmFtZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gKHRoaXMuY3VycmVudEluZGV4IC0gMSArIHRoaXMuc3ByaXRlRnJhbWVzLmxlbmd0aCkgJSB0aGlzLnNwcml0ZUZyYW1lcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuX3Nwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlRnJhbWVzW3RoaXMuY3VycmVudEluZGV4XTtcbiAgICB9LFxuXG4gICAgb25EZXN0cm95ICgpIHtcbiAgICAgICAgLy8g6Kej57uR5LqL5Lu2XG4gICAgICAgIHRoaXMubm9kZS5vZmYoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub2ZmKCd0b3VjaGVuZCcsICAgdGhpcy5fb25Ub3VjaEVuZCwgICB0aGlzKTtcbiAgICB9LFxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/rule/isshow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '75868x2B49BYZhSYAfBPtRg', 'isshow');
// scripts/rule/isshow.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  "extends": cc.Component,
  properties: {
    childNode1: cc.Node
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
  // onLoad () {},
  start: function start() {},
  onclick: function onclick() {
    this.childNode1.active = true;
  } // update (dt) {},
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccnVsZVxcaXNzaG93LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY2hpbGROb2RlMSIsIk5vZGUiLCJzdGFydCIsIm9uY2xpY2siLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLFVBQVUsRUFBRUosRUFBRSxDQUFDSztJQUNmO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNKLENBQUM7RUFFRDtFQUVBO0VBRUFDLEtBQUssV0FBQUEsTUFBQSxFQUFJLENBRVQsQ0FBQztFQUVEQyxPQUFPLFdBQUFBLFFBQUEsRUFBRTtJQUNMLElBQUksQ0FBQ0gsVUFBVSxDQUFDSSxNQUFNLEdBQUMsSUFBSTtFQUMvQixDQUFDLENBR0Q7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGNoaWxkTm9kZTE6IGNjLk5vZGUsXG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIG9uY2xpY2soKXtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGUxLmFjdGl2ZT10cnVlO1xuICAgIH1cblxuICAgIFxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/rule/isclose.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2dbaQ+J1NKw5AJq+qjAQSJ', 'isclose');
// scripts/rule/isclose.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  "extends": cc.Component,
  properties: {
    childNode1: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  onclick: function onclick() {
    this.childNode1.active = false;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccnVsZVxcaXNjbG9zZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImNoaWxkTm9kZTEiLCJOb2RlIiwic3RhcnQiLCJvbmNsaWNrIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxVQUFVLEVBQUVKLEVBQUUsQ0FBQ0s7RUFDbkIsQ0FBQztFQUVEO0VBRUE7RUFFQUMsS0FBSyxXQUFBQSxNQUFBLEVBQUksQ0FFVCxDQUFDO0VBRURDLE9BQU8sV0FBQUEsUUFBQSxFQUFFO0lBQ0wsSUFBSSxDQUFDSCxVQUFVLENBQUNJLE1BQU0sR0FBQyxLQUFLO0VBQ2hDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjaGlsZE5vZGUxOiBjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICBvbmNsaWNrKCl7XG4gICAgICAgIHRoaXMuY2hpbGROb2RlMS5hY3RpdmU9ZmFsc2U7XG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/comm/retu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1452bjeEZVAh6a1cz/VIadO', 'retu');
// scripts/index2/retu.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  "extends": cc.Component,
  properties: {
    targetScene: {
      "default": '',
      tooltip: ''
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  onclick: function onclick() {
    if (this.targetScene) {
      cc.director.loadScene(this.targetScene);
    } else {
      cc.warn('ImageClickLoader: 请在属性检查器里填写 targetScene');
    }
  } // update (dt) {},
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaW5kZXgyXFxyZXR1LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGFyZ2V0U2NlbmUiLCJ0b29sdGlwIiwic3RhcnQiLCJvbmNsaWNrIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJ3YXJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxXQUFXLEVBQUU7TUFDVCxXQUFTLEVBQUU7TUFDWEMsT0FBTyxFQUFFO0lBQ2I7RUFDSixDQUFDO0VBRUQ7RUFFQTtFQUVBQyxLQUFLLFdBQUFBLE1BQUEsRUFBSSxDQUVULENBQUM7RUFDREMsT0FBTyxXQUFBQSxRQUFBLEVBQUU7SUFDTCxJQUFJLElBQUksQ0FBQ0gsV0FBVyxFQUFFO01BQ2xCSixFQUFFLENBQUNRLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQ0wsV0FBVyxDQUFDO0lBQzNDLENBQUMsTUFBTTtNQUNISixFQUFFLENBQUNVLElBQUksQ0FBQywwQ0FBMEMsQ0FBQztJQUN2RDtFQUNKLENBQUMsQ0FDRDtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGFyZ2V0U2NlbmU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgdG9vbHRpcDogJydcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge30sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuICAgIG9uY2xpY2soKXtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0U2NlbmUpIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh0aGlzLnRhcmdldFNjZW5lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLndhcm4oJ0ltYWdlQ2xpY2tMb2FkZXI6IOivt+WcqOWxnuaAp+ajgOafpeWZqOmHjOWhq+WGmSB0YXJnZXRTY2VuZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/comm/colorfonts.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a6591Z4aidHgLV72uvD7QqS', 'colorfonts');
// scripts/index2/colorfonts.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  "extends": cc.Component,
  properties: {
    fontColor: {
      "default": cc.Color.WHITE,
      tooltip: '在编辑器里选择想要的字体颜色'
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
  onLoad: function onLoad() {
    this.node.color = this.fontColor;
  },
  start: function start() {} // update (dt) {},
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaW5kZXgyXFxjb2xvcmZvbnRzLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZm9udENvbG9yIiwiQ29sb3IiLCJXSElURSIsInRvb2x0aXAiLCJvbkxvYWQiLCJub2RlIiwiY29sb3IiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFFUkMsU0FBUyxFQUFFO01BQ1AsV0FBU0osRUFBRSxDQUFDSyxLQUFLLENBQUNDLEtBQUs7TUFDdkJDLE9BQU8sRUFBRTtJQUNiO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0osQ0FBQztFQUVEO0VBRUNDLE1BQU0sV0FBQUEsT0FBQSxFQUFJO0lBRVAsSUFBSSxDQUFDQyxJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJLENBQUNOLFNBQVM7RUFDbkMsQ0FBQztFQUVGTyxLQUFLLFdBQUFBLE1BQUEsRUFBSSxDQUVULENBQUMsQ0FFRDtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcblxuICAgICAgICBmb250Q29sb3I6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IGNjLkNvbG9yLldISVRFLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+WcqOe8lui+keWZqOmHjOmAieaLqeaDs+imgeeahOWtl+S9k+minOiJsidcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGJhcjoge1xuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAgb25Mb2FkICgpIHtcblxuICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSB0aGlzLmZvbnRDb2xvcjtcbiAgICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/load/loadtextanimation.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa3cbRX/1dMhbRolKMx2l+S', 'loadtextanimation');
// scripts/loadtextanimation.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  "extends": cc.Component,
  properties: {
    index: {
      "default": 0,
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
  onLoad: function onLoad() {
    this.schedule(this.onTimeer, 0.1);
  },
  start: function start() {
    //  this.childNode1 = this.node.getChildByName("point1");
    //  this.childNode2 = this.node.getChildByName("point2");
    //  this.childNode3 = this.node.getChildByName("point3");
    cc.log('显示:' + this.childNode1);
    if (this.childNode1 && this.childNode2 && this.childNode3) {
      this.childNode1.active = true; // 隐藏
      this.childNode2.active = false; // 隐藏
      this.childNode3.active = false; // 显示
    }
  },
  onTimeer: function onTimeer() {
    this.index++;
    if (this.childNode1 && this.childNode2 && this.childNode3) {
      if (this.index >= 0 && this.index <= 5) {
        this.childNode1.active = true; // 隐藏
        this.childNode2.active = false; // 隐藏
        this.childNode3.active = false; // 显示
      } else if (this.index >= 6 && this.index <= 10) {
        this.childNode1.active = true; // 隐藏
        this.childNode2.active = true; // 隐藏
        this.childNode3.active = false; // 显示
      } else if (this.index >= 11 && this.index <= 15) {
        this.childNode1.active = true; // 隐藏
        this.childNode2.active = true; // 隐藏
        this.childNode3.active = true; // 显示
      } else {
        this.index = -1;
      }
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbG9hZHRleHRhbmltYXRpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpbmRleCIsInR5cGUiLCJJbnRlZ2VyIiwiY2hpbGROb2RlMSIsIk5vZGUiLCJjaGlsZE5vZGUyIiwiY2hpbGROb2RlMyIsIm9uTG9hZCIsInNjaGVkdWxlIiwib25UaW1lZXIiLCJzdGFydCIsImxvZyIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsS0FBSyxFQUFFO01BQ0gsV0FBUyxDQUFDO01BQ1ZDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUNiLENBQUM7SUFDREMsVUFBVSxFQUFFUCxFQUFFLENBQUNRLElBQUk7SUFDbkJDLFVBQVUsRUFBRVQsRUFBRSxDQUFDUSxJQUFJO0lBQ25CRSxVQUFVLEVBQUVWLEVBQUUsQ0FBQ1E7SUFDZjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNKLENBQUM7RUFHRDtFQUVDRyxNQUFNLFdBQUFBLE9BQUEsRUFBSTtJQUVQLElBQUksQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQ0MsUUFBUSxFQUFDLEdBQUcsQ0FBQztFQUNuQyxDQUFDO0VBRUZDLEtBQUssV0FBQUEsTUFBQSxFQUFJO0lBQ0w7SUFDQTtJQUNBO0lBQ0NkLEVBQUUsQ0FBQ2UsR0FBRyxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUNSLFVBQVUsQ0FBQztJQUM5QixJQUFJLElBQUksQ0FBQ0EsVUFBVSxJQUFFLElBQUksQ0FBQ0UsVUFBVSxJQUFFLElBQUksQ0FBQ0MsVUFBVSxFQUFFO01BQ25ELElBQUksQ0FBQ0gsVUFBVSxDQUFDUyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7TUFDL0IsSUFBSSxDQUFDUCxVQUFVLENBQUNPLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztNQUNoQyxJQUFJLENBQUNOLFVBQVUsQ0FBQ00sTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBRXBDO0VBRUosQ0FBQztFQUNESCxRQUFRLFdBQUFBLFNBQUEsRUFBRTtJQUNOLElBQUksQ0FBQ1QsS0FBSyxFQUFFO0lBQ1osSUFBSSxJQUFJLENBQUNHLFVBQVUsSUFBRSxJQUFJLENBQUNFLFVBQVUsSUFBRSxJQUFJLENBQUNDLFVBQVUsRUFBRTtNQUNuRCxJQUFHLElBQUksQ0FBQ04sS0FBSyxJQUFFLENBQUMsSUFBRSxJQUFJLENBQUNBLEtBQUssSUFBRSxDQUFDLEVBQUM7UUFDNUIsSUFBSSxDQUFDRyxVQUFVLENBQUNTLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUNQLFVBQVUsQ0FBQ08sTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQ04sVUFBVSxDQUFDTSxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7TUFDcEMsQ0FBQyxNQUFLLElBQUcsSUFBSSxDQUFDWixLQUFLLElBQUUsQ0FBQyxJQUFFLElBQUksQ0FBQ0EsS0FBSyxJQUFFLEVBQUUsRUFBQztRQUNuQyxJQUFJLENBQUNHLFVBQVUsQ0FBQ1MsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQ1AsVUFBVSxDQUFDTyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDTixVQUFVLENBQUNNLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztNQUNwQyxDQUFDLE1BQUssSUFBRyxJQUFJLENBQUNaLEtBQUssSUFBRSxFQUFFLElBQUUsSUFBSSxDQUFDQSxLQUFLLElBQUUsRUFBRSxFQUFDO1FBQ3BDLElBQUksQ0FBQ0csVUFBVSxDQUFDUyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDUCxVQUFVLENBQUNPLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUNOLFVBQVUsQ0FBQ00sTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO01BRW5DLENBQUMsTUFBSTtRQUNELElBQUksQ0FBQ1osS0FBSyxHQUFDLENBQUMsQ0FBQztNQUNqQjtJQUVKO0VBQ0o7QUFHSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGluZGV4OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxuICAgICAgICAgICAgdHlwZTogY2MuSW50ZWdlclxuICAgICAgICB9LFxuICAgICAgICBjaGlsZE5vZGUxOiBjYy5Ob2RlLFxuICAgICAgICBjaGlsZE5vZGUyOiBjYy5Ob2RlLFxuICAgICAgICBjaGlsZE5vZGUzOiBjYy5Ob2RlXG4gICAgICAgIC8vIGluZGV4OiAwXG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgfSxcblxuICAgIFxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgIG9uTG9hZCAoKSB7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLm9uVGltZWVyLDAuMSk7XG4gICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vICB0aGlzLmNoaWxkTm9kZTEgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwb2ludDFcIik7XG4gICAgICAgIC8vICB0aGlzLmNoaWxkTm9kZTIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwb2ludDJcIik7XG4gICAgICAgIC8vICB0aGlzLmNoaWxkTm9kZTMgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwb2ludDNcIik7XG4gICAgICAgICBjYy5sb2coJ+aYvuekujonK3RoaXMuY2hpbGROb2RlMSk7XG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZTEmJnRoaXMuY2hpbGROb2RlMiYmdGhpcy5jaGlsZE5vZGUzKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZTEuYWN0aXZlID0gdHJ1ZTsgLy8g6ZqQ6JePXG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZTIuYWN0aXZlID0gZmFsc2U7IC8vIOmakOiXj1xuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGUzLmFjdGl2ZSA9IGZhbHNlOyAvLyDmmL7npLpcblxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0sXG4gICAgb25UaW1lZXIoKXtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGUxJiZ0aGlzLmNoaWxkTm9kZTImJnRoaXMuY2hpbGROb2RlMykge1xuICAgICAgICAgICAgaWYodGhpcy5pbmRleD49MCYmdGhpcy5pbmRleDw9NSl7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGUxLmFjdGl2ZSA9IHRydWU7IC8vIOmakOiXj1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGROb2RlMi5hY3RpdmUgPSBmYWxzZTsgLy8g6ZqQ6JePXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGUzLmFjdGl2ZSA9IGZhbHNlOyAvLyDmmL7npLpcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuaW5kZXg+PTYmJnRoaXMuaW5kZXg8PTEwKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkTm9kZTEuYWN0aXZlID0gdHJ1ZTsgLy8g6ZqQ6JePXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGUyLmFjdGl2ZSA9IHRydWU7IC8vIOmakOiXj1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGROb2RlMy5hY3RpdmUgPSBmYWxzZTsgLy8g5pi+56S6XG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmluZGV4Pj0xMSYmdGhpcy5pbmRleDw9MTUpe1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGROb2RlMS5hY3RpdmUgPSB0cnVlOyAvLyDpmpDol49cbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkTm9kZTIuYWN0aXZlID0gdHJ1ZTsgLy8g6ZqQ6JePXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGUzLmFjdGl2ZSA9IHRydWU7IC8vIOaYvuekulxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleD0tMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------
