
// You can write more code here
/* START OF COMPILED CODE */

class RoomComponent extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.GameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__RoomComponent"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.GameObject): RoomComponent {
		return (gameObject as any)["__RoomComponent"];
	}

	private gameObject: Phaser.GameObjects.GameObject;
	public roomName: string = "Noname Room";
	public floor: number = 0;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
