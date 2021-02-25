 let palBuf: Buffer = hex`000000
        ffffff
        f8d898
        f8a830
        c04800
        f80000
        c868e8
        10c0c8
        2868c0
        089050
        70d038
        f8f858
        787878
        c0c0c0
        f8f8f8
        000000`
  image.setPalette(palBuf)
  
scene.setBackgroundColor(1)

let cursor: Sprite = null;
cursor = sprites.create(entities.hand);
cursor.z = 2
cursor.setPosition(30,30);

let label: TextSprite = null
label = textsprite.create("NorthAmerica", 0, 1)
label.z = 1
label.setOutline(3, 6)

let map:Map = new MapWorld();
map.bootup();

game.onUpdate(function() {
    
    let vala = controller.A.isPressed();
    let valb = controller.B.isPressed();
    let u = controller.up.isPressed();
    let d= controller.down.isPressed();
    let r = controller.right.isPressed();
    let l = controller.left.isPressed();

    if (vala) {
        if (map != null && map instanceof MapWorld) {
            map.teardown();
            map = null;
            map = new MapNorthAm();
            map.bootup();
        }
    }
    if (valb) {
        if (map != null && !(map instanceof MapWorld)) {
            map.teardown();
            map = null;
            map = new MapWorld();
            map.bootup();
        }
    }
    

    if(cursor.x < 5)  {
        cursor.setPosition(5,cursor.y);
    } else if(cursor.x >165)    {
        cursor.setPosition(165,cursor.y);
    }

    if(cursor.y < 10)  {
        cursor.setPosition(cursor.x,10);
    } else if(cursor.y >120)    {
        cursor.setPosition(cursor.x,120);
    }

    if(u) {
        cursor.setVelocity(0, cursor.vy*1.2 - 7);
    } else if(d) {
        cursor.setVelocity(0, cursor.vy*1.2 + 7);
    } else if(r) {
        cursor.setVelocity(cursor.vx*1.2 + 7, 0);
    } else if(l) {
        cursor.setVelocity(cursor.vx*1.2 - 7, 0);
    } else {
        cursor.setVelocity(0, 0);
    } 
    let labelx = cursor.x + 14;
    let labely = cursor.y + 11;

    if(cursor.x > 80) {
        labelx = cursor.x - 22;
    }
    if(cursor.y > 70) {
        labely = cursor.y - 18;
    }
    label.setPosition(labelx,labely);

    if (map != null) {
        map.pan(cursor.x-5, cursor.y-10);

        label.setText(map.getText());
    }
    
})
