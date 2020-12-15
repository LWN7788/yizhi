
cc.Class({
    extends: cc.Component,

    properties: {
        leftNode:cc.Node,
        centerNode:cc.Node,
        rightNode:cc.Node,
        leftStatus:cc.Node,
        centerStatus:cc.Node,
        rightStatus:cc.Node,
        winAudio: {
            default: null,
            type: cc.AudioClip
        },
        errorAudio: {
            default: null,
            type: cc.AudioClip
        },
    },

    start () {
        this.leftStatus.active = false;
        this.centerStatus.active = false;
        this.rightStatus.active = false;
        this.addEventHandler();
    },

    addEventHandler(){
        this.leftNode.on('touchstart',(event)=>{
            this.leftStatus.active = true;
            cc.audioEngine.playEffect(this.winAudio, false);
        })
        this.centerNode.on('touchstart',(event)=>{
            this.centerStatus.active = true;
            cc.audioEngine.playEffect(this.errorAudio, false);
        })
        this.rightNode.on('touchstart',(event)=>{
            this.rightStatus.active = true;
            cc.audioEngine.playEffect(this.errorAudio, false);
        })
    }

});
