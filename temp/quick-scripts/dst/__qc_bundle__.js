
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
require('./assets/scripts/index2/colorfonts');
require('./assets/scripts/index2/retu');
require('./assets/scripts/loadtextanimation');

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
                    var __filename = 'preview-scripts/assets/scripts/loadtextanimation.js';
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

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/index2/colorfonts.js';
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
                    var __filename = 'preview-scripts/assets/scripts/index2/retu.js';
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
