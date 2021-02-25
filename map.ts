// Add your code here
class Map {
    title: string;
    handX:number = 0;
    handY:number = 0;
    
    padding: number = 0;
    mapCurX:number = 0;
    mapCurY:number = 0;
    mapMaxX:number = 0;
    mapMaxY:number = 0;

    
    mapSprite: Sprite = null;
    mapSpriteOffsetX: number = 0;
    mapSpriteOffsetY: number = 0;

    panningTime: number = 0;

    constructor() {
        this.title = "Missing";
    }

    bootup() {
    }

    teardown() {

    }

    pan(x:number, y:number) {
        this.handX = x;
        this.handY = y;
        let prevX = this.mapCurX;
        let prevY = this.mapCurY;
        let panSpeed = 1 + 1 * Math.round(this.panningTime / 3);
        if(this.mapMaxX > 0)
        {
            if(x < this.padding) {
                this.mapCurX -= panSpeed;
            } else if (x > (120-this.padding)) {
                this.mapCurX += panSpeed;
            }
            this.mapCurX = Math.clamp(0,this.mapMaxX,this.mapCurX)
        }
        if(this.mapMaxY > 0) {
            if(y < this.padding) {
                this.mapCurY -= panSpeed;
            } else if (y > (120-this.padding)) {
                this.mapCurY += panSpeed;
            }
            this.mapCurY = Math.clamp(0,this.mapMaxY,this.mapCurY)
        }
        let isPanning = prevX != this.mapCurX || prevY != this.mapCurY;
        if(isPanning) {
            this.mapSprite.setPosition(
                this.mapSpriteOffsetX-this.mapCurX, 
                this.mapSpriteOffsetY-this.mapCurY);
            this.panningTime += 1;
        } else {
            this.panningTime = 0;
        }
    }

    getTitle() : string {
        return this.title;
    }

    getText() : string {
        return "missing";
    }
}