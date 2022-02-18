
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
	
	constructor() {
		super("Level");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// text_1
		const text_1 = this.add.text(400, 406, "", {});
		text_1.setOrigin(0.5, 0);
		text_1.text = "Phaser 3 + Phaser Editor 2D + TypeScript";
		text_1.setStyle({"fontFamily":"arial","fontSize":"3em"});
		
		// dino
		const dino = this.add.image(400, 245.50984430371858, "dino");
		
		// back
		const back = this.add.image(710, 78, "arrow");
		back.scaleX = 0.19220347773144297;
		back.scaleY = 0.19220347773144297;
		
		// dino (components)
		new PushOnClick(dino);
		dino.emit("components-awake");
		
		this.back = back;
	}
	
	private back: Phaser.GameObjects.Image|undefined;
	
	/* START-USER-CODE */

	// Write your code here.

	create() {

		this.editorCreate();
		this.back?.setInteractive();
		// this.back?.on('pointerover', (button: Phaser.GameObjects.Image) => {
		// 	console.log("Pointerover");
		// 	button.setTint(0x339933);
		// }, this.back);
		this.back?.on('pointerover', () => {
			console.log("Pointerover");
			this.back?.setTint(0x339933);
		});
		this.back?.on('pointerout', () => {
			console.log("Pointerout");
			this.back?.clearTint();
		});
		this.back?.once('pointerdown', () => {
			console.log("Clicked");
			this.scene.start("RoomScene");
		});
		// console.log("changed");
		// this.add.polygon(100, 0,
		// 	[0, 0, 0, 100, 100, 100, 100, 0]
		// 	, 0xff00ff, 0.5)
		var p = this.add.polygon(0, 0,
			[0, 0, 0, 100, 100, 100, 100, 0])
		p.fillColor = 0xff00ff
		p.fillAlpha = 0.5
		var sp: Phaser.GameObjects.Text
		sp = this.add.text(96, 32, "", {});
		sp.setOrigin(0.5, 0.5);
		sp.text = "Unknown Room\n";
		sp.setStyle({ "fontSize": "20px" });
		sp.setText("1919")
		// sp.destroy()

		sp.setText("114514")
		console.log(p)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
