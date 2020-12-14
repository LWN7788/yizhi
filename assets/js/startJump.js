
cc.Class({
    extends: cc.Component,

    properties: {
       
    },

   
    onLoad () {
        var jumpAction = this.runJumpAction();
        cc.tween(this.node).then(jumpAction).repeat(3).start()
    },
    runJumpAction () {
        // 跳跃上升
        var jumpUp = cc.tween().by(0.2, {y: 20}, {easing: 'sineIn'});
        // 下落
        var jumpDown = cc.tween().by(1, {y: -20}, {easing: 'sineOut'});

        // 创建一个缓动，按 jumpUp、jumpDown 的顺序执行动作
        var tween = cc.tween().sequence(jumpUp, jumpDown)
        // 不断重复
        return tween;
    },
    start () {

    },
});
