//Rocket (player) prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,texture,frame) {
        super(scene,x,y,texture,frame);

        //add object to existing scene (this = rocket)
        scene.add.existing(this);
        this.isFiring = false; //track firing
        this.moveSpeed = 2; //pixels per frame
    }

    update(){
        //leftandright movement
        if(!this.isFiring) {
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
                }else if(keyRIGHT.isDown){
                    this.x += this.moveSpeed;
            }
        }
    }
}