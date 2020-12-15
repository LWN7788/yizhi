

cc.Class({
    extends: cc.Component,

    properties: {
        hx:cc.Node,
        px:cc.Node,
        ey:cc.Node,
    },

    onLoad () {
        this.count = 0;
        this.callback = function () {
            if (this.count === 5) {
                // 在第六次执行回调时取消这个计时器
                this.unschedule(this.callback);
            }
            this.doSomething();
            this.count++;
        }
        component.schedule(this.callback, 1);
    },

});
