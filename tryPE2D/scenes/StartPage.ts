
// You can write more code here

/* START OF COMPILED CODE */

class StartPage extends Phaser.Scene {
	
	constructor() {
		super("StartPage");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// bg
		const bg = this.add.image(400, 300, "不忘初心");
		bg.scaleX = 1.3504855554906776;
		bg.scaleY = 1.3504855554906776;
		
		// title
		const title = this.add.text(400, 480, "", {});
		title.setOrigin(0.5, 0.5);
		title.text = "开始游戏";
		title.setStyle({"backgroundColor":"#00b6e3ff","color":"#9a0000ff","fontFamily":"微软雅黑, Simsun, Courier","fontSize":"64px","stroke":"#028400ff","strokeThickness":6});
		
		// startbutton
		const startbutton = this.add.rectangle(619, 481, 128, 128);
		startbutton.isFilled = true;
		startbutton.fillColor = 166158;
		
		this.title = title;
		this.startbutton = startbutton;
	}
	
	private title: Phaser.GameObjects.Text|undefined;
	private startbutton: Phaser.GameObjects.Rectangle|undefined;
	
	/* START-USER-CODE */

	// Write your code here

	create() {
		Global.getInstance();
		this.editorCreate();
		this.startbutton?.setInteractive();
		this.startbutton?.once('pointerdown', () => {
			console.log("Clicked");
			this.scene.start("Level");
		});
		// this.scene.start("Level");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
