
// You can write more code here

/* START OF COMPILED CODE */

class SceneSwitchButton extends Phaser.GameObjects.Triangle {
	
	constructor(scene: Phaser.Scene, x: number, y: number, x1?: number, y1?: number, x2?: number, y2?: number, x3?: number, y3?: number) {
		super(scene, x, y, typeof x1 === "number" ? x1 : 0, typeof y1 === "number" ? y1 : 128, typeof x2 === "number" ? x2 : 64, typeof y2 === "number" ? y2 : 0, typeof x3 === "number" ? x3 : 128, typeof y3 === "number" ? y3 : 128);
		
		this.scaleY = 0.37016706926192194;
		this.isFilled = true;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	public direction: ""|"Left"|"Right"|"Up"|"Down" = "";
	public toScene: number = 0;
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
