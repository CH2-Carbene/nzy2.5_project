
// You can write more code here
/* START OF COMPILED CODE */

class ItemBoxComponent extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Rectangle) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__ItemBoxComponent"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Rectangle): ItemBoxComponent {
		return (gameObject as any)["__ItemBoxComponent"];
	}

	private gameObject: Phaser.GameObjects.Rectangle;
	public ID: number = -1;
	public Item: string = "";

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
