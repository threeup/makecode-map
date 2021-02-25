// Add your code here

enum NorthAmCountry {
    Greenland,
    Canada,
    UnitedStates,
    Mexico,
    Cuba,
    Nothing,
}   // enum NorthAmCountry

class MapNorthAm extends Map {
    constructor() {
        super();
        this.title = "North Am";
    }
    bootup() {
        super.bootup();
        this.mapSprite = sprites.create(entities.northam, 0);
        this.mapSpriteOffsetX = 140;
        this.mapSpriteOffsetY = 160;
        this.mapSprite.setPosition(this.mapSpriteOffsetX, this.mapSpriteOffsetY)
        this.padding = 15;
        this.mapMaxX = 110;
        this.mapMaxY = 200;
    }

    teardown() {
        super.teardown();
        this.mapSprite.destroy();
        this.mapSprite = null;
    }


    private findClosestCountry(x:number, y:number):NorthAmCountry {
        if (y < 150)
        {
            if (y < 30 && x > 190) {
                return NorthAmCountry.Greenland;
            }
            return NorthAmCountry.Canada;
        } else if (y < 230) {
            return NorthAmCountry.UnitedStates;
        } else if (y < 300) {
            if(x > 210) { 
                return NorthAmCountry.Cuba;
            }
            return NorthAmCountry.Mexico;
        }
        return NorthAmCountry.Nothing;

        
    }
    

    getText() : string {
        let x = this.handX+this.mapCurX;
        let y = this.handY+this.mapCurY;
        let closest = this.findClosestCountry(x,y);
        switch(closest) {
            default: break;
            case NorthAmCountry.Canada: return "Canada";
            case NorthAmCountry.Greenland: return "Greenland";
            case NorthAmCountry.UnitedStates: return "UnitedStates";
            case NorthAmCountry.Cuba: return "Cuba";
            case NorthAmCountry.Mexico: return "Mexico";   
        }
        return "?";
    }

}
