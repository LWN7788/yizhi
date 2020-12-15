

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
       
    },
    start () {
        this.updatLevel(1);
        this.addEventHandler();
    },

    updatLevel(level){
        this.level=level;
        this.levelLabel.string=level;
    },

    addEventHandler(){
        this.nextBtn.on('touchstart',(event)=>{
            this.updatLevel(++this.level);
        })
        this.prevBtn.on('touchstart',(event)=>{
            if(this.level>1){
                this.updatLevel(--this.level);
            }
        })
        this.startBtn.on('touchstart',(event)=>{
            cc.director.loadScene("level"+this.level);
        })
    }
});
