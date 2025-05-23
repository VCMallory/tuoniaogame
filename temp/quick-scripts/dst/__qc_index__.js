
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
require('./assets/scripts/achiment/iscloseachiment');
require('./assets/scripts/achiment/isshowachiment');
require('./assets/scripts/comm/colorfonts');
require('./assets/scripts/comm/retu');
require('./assets/scripts/load/loadtextanimation');
require('./assets/scripts/rule/isclose');
require('./assets/scripts/rule/isshow');
require('./assets/scripts/rule/rule');
require('./assets/scripts/setting/iscloseset');
require('./assets/scripts/setting/isshowset');
require('./assets/scripts/setting/setchange');
require('./assets/scripts/setting/setchange1');
require('./assets/scripts/share/iscloseshare');
require('./assets/scripts/share/isshowshare');
require('./assets/scripts/sign/isclosesign');
require('./assets/scripts/sign/isshowsign');
require('./assets/scripts/sign/signjs');
require('./assets/scripts/task/isclosetask');
require('./assets/scripts/task/isshowtask');

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