
// You can write more code here

/* START OF COMPILED CODE */

class _SceneSwitchButton extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Triangle) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__SceneSwitchButton"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Triangle): SceneSwitchButton {
		return (gameObject as any)["__SceneSwitchButton"];
	}

	private gameObject: Phaser.GameObjects.Triangle;
	public direction: number = -1;

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		this.gameObject.setInteractive().on("pointerdown", () => {

			var sceneMove = this.cache.json.get("roomList")[this.info.room].scenes[this.info.scene].move;
			this.info.update("moveScene", {
				"scene": sceneMove[]
			});
		}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
