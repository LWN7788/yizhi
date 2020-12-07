

cc.Class({
    extends: cc.Component,

    properties: {
       level:1,
       levelNode:cc.Node,
       homeBtn:cc.Node,
       leftNode:cc.Node,
       centerNode:cc.Node,
       rightNode:cc.Node
    },

    start () {
        this.addEventHandler();
    },

    addEventHandler(){
        this.homeBtn.on('touchstart',(event)=>{
            cc.director.loadScene("index");
        })
    }

});
