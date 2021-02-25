
enum Continent {
    NorthAmerica,
    SouthAmerica,
    Europe,
    Africa,
    Asia,
    Oceania,
    Antarctica,
    Nothing,
}   // enum Continent

class MapWorld extends Map {
    worldX: number = 0;
    worldY: number = 0;
    
    constructor() {
        super();
        this.title = "World";
    }
    bootup() {
        super.bootup()
        this.mapSprite = sprites.create(projectImages.wholemap, 0);
        this.mapSpriteOffsetX = 80;
        this.mapSpriteOffsetY = 55;
        this.mapSprite.setPosition(this.mapSpriteOffsetX, this.mapSpriteOffsetY)
    }

    teardown() {
        super.teardown();
        this.mapSprite.destroy();
        this.mapSprite = null;
    }

    findClosestContinent(x:number, y:number):Continent {
        if(y > 105) {
            return Continent.Antarctica;
        } else if(x < 67) {
            return y < 60?Continent.NorthAmerica:Continent.SouthAmerica;
        } else if (x<114) {
            return y < 57?Continent.Europe:Continent.Africa;
        } else {
            return y < 75?Continent.Asia:Continent.Oceania;
        }
    }
    
    getText() : string {
        let closest = this.findClosestContinent(this.handX,this.handY);
        switch(closest) {
            default: break;
            case Continent.NorthAmerica: return "North America";
            case Continent.SouthAmerica: return "South America";
            case Continent.Europe: return "Europe";
            case Continent.Africa: return "Africa";
            case Continent.Asia: return "Asia";
            case Continent.Oceania: return "Oceania";
            case Continent.Antarctica: return "Antarctica";
        }
        return "";
    }

}
