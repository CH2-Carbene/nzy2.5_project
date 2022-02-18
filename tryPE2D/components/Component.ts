
// You can write more code here

/* START OF COMPILED CODE */

class Component {
	
	constructor(gameObject: Phaser.GameObjects.Image) {
		this.gameObject = gameObject;
		(gameObject as any)["__Component"] = this;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	static getComponent(gameObject: Phaser.GameObjects.Image): Component {
		return (gameObject as any)["__Component"];
	}
	
	private gameObject: Phaser.GameObjects.Image;
	public property1: string = "";
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
