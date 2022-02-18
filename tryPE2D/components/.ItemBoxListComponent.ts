
// You can write more code here

/* START OF COMPILED CODE */

class ItemBoxListComponent extends UserComponent {
	
	constructor(gameObject: Phaser.GameObjects.Rectangle) {
		super(gameObject);
		
		this.gameObject = gameObject;
		(gameObject as any)["__ItemBoxListComponent"] = this;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	static getComponent(gameObject: Phaser.GameObjects.Rectangle): ItemBoxListComponent {
		return (gameObject as any)["__ItemBoxListComponent"];
	}
	
	private gameObject: Phaser.GameObjects.Rectangle;
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
