
cc.Class({
    extends: cc.Component,

    properties: {
       
    },
    onLoad () {
        var interval = 2;
        // 重复次数
        var repeat = 3;
        // 开始延时
        var delay = 3;
        this.schedule(function() {
            var jumpAction = this.runJumpAction();
            cc.tween(this.node).then(jumpAction).start();
        }, interval, repeat, delay);
       
    },
    runJumpAction () {
        // 跳跃上升
        var jumpUp = cc.tween().by(0.3, {y: 25,scale: 0.1}, {easing: 'sineIn'});
        // 下落
        var jumpDown = cc.tween().by(0.1, {y: -25,scale:-0.1,}, {easing: 'sineOut'});

        // 创建一个缓动，按 jumpUp、jumpDown 的顺序执行动作
        var tween = cc.tween().sequence(jumpUp, jumpDown)
        // 不断重复
        return tween;
    
    },
});
