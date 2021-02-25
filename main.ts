
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

scene.setBackgroundColor(1)
let mapSprite = sprites.create(background1.wholemap, 0);
mapSprite.setPosition(80, 50)

let cursor: Sprite = null;
cursor = sprites.create(entities.hand);
cursor.setPosition(30,30);

let label: TextSprite = null
label = textsprite.create("NorthAmerica", 0, 1)
label.z = 1
label.setOutline(3, 6)

function findClosestContinent(x:number, y:number):Continent {
    if(y > 105) {
        return Continent.Antarctica;
    } else if(x < 60) {
        return y < 60?Continent.NorthAmerica:Continent.SouthAmerica;
    } else if (x<110) {
        return y < 57?Continent.Europe:Continent.Africa;
    } else {
        return y < 75?Continent.Asia:Continent.Oceania;
    }
    

}

game.onUpdate(function() {
    
    let vala = controller.A.isPressed();
    let valb = controller.B.isPressed();
    let u = controller.up.isPressed();
    let d= controller.down.isPressed();
    let r = controller.right.isPressed();
    let l = controller.left.isPressed();
    

    if(cursor.x < 5)  {
        cursor.setPosition(5,cursor.y);
    } else if(cursor.x >165)    {
        cursor.setPosition(165,cursor.y);
    }

    if(cursor.y < 5)  {
        cursor.setPosition(cursor.x,5);
    } else if(cursor.y >120)    {
        cursor.setPosition(cursor.x,120);
    }

    if(u) {
        cursor.setVelocity(0, cursor.vy*1.5 - 2);
    } else if(d) {
        cursor.setVelocity(0, cursor.vy*1.5 + 2);
    } else if(r) {
        cursor.setVelocity(cursor.vx*1.5 + 2, 0);
    } else if(l) {
        cursor.setVelocity(cursor.vx*1.5 - 2, 0);
    } else {
        cursor.setVelocity(0, 0);
    } 
    let labelx = cursor.x + 14;
    let labely = cursor.y + 11;

    if(cursor.x > 80) {
        labelx = cursor.x - 14;
    }
    if(cursor.y > 70) {
        labely = cursor.y - 18;
    }
    label.setPosition(labelx,labely)
    
    let closest = findClosestContinent(cursor.x, cursor.y);
    switch(closest) {
        default: break;
        case Continent.NorthAmerica: label.setText("North America"); break;
        case Continent.SouthAmerica: label.setText("South America"); break;
        case Continent.Europe: label.setText("Europe"); break;
        case Continent.Africa: label.setText("Africa"); break;
        case Continent.Asia: label.setText("Asia"); break;
        case Continent.Oceania: label.setText("Oceania"); break;
        case Continent.Antarctica: label.setText("Antarctica"); break;
    }
})
