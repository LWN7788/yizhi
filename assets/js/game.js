// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        level:1,
        levelLabel:cc.Label,
        prevBtn:cc.Node,
        nextBtn:cc.Node,
        startBtn:cc.Node
    },
    onLoad () {
        cc.log('onload')
    },
    onDestroy () {
        cc.log('onload')
    },
    start () {
        this.updatLevel(1);
        this.addEventHandler();
    },

    updatLevel(level){
        cc.log(level)
        this.level=level;
        this.levelLabel.string=level;
    },

    addEventHandler(){
        this.nextBtn.on('touchstart',(event)=>{
            this.updatLevel(++this.level);
        })
        this.prevBtn.on('touchstart',(event)=>{
            this.updatLevel(--this.level);
        })
        this.startBtn.on('touchstart',(event)=>{
            cc.director.loadScene("level1");
        })
    }
});
