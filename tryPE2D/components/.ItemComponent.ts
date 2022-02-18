
// You can write more code here

/* START OF COMPILED CODE */

class ItemComponent extends UserComponent {
	
	constructor(gameObject: Phaser.GameObjects.Image) {
		super(gameObject);
		
		this.gameObject = gameObject;
		(gameObject as any)["__ItemComponent"] = this;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	static getComponent(gameObject: Phaser.GameObjects.Image): ItemComponent {
		return (gameObject as any)["__ItemComponent"];
	}
	
	private gameObject: Phaser.GameObjects.Image;
	public itemName: string = "未知物品";
	public describe: string = "一个未知物品。";
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
