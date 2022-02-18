
// You can write more code here


/* START OF COMPILED CODE */

class RoomScene extends Phaser.Scene {
	
	constructor() {
		super("RoomScene");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		// Phaser.Loader.FileTypes.JSONFile.

		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// bg
		const bg = this.add.image(0, 0, "__DEFAULT");
		bg.setOrigin(0, 0);
		
		// itemBoxBottom
		const itemBoxBottom = this.add.rectangle(735, 310, 128, 128);
		itemBoxBottom.scaleX = 1.270537567909736;
		itemBoxBottom.scaleY = 5.131907024964907;
		itemBoxBottom.isFilled = true;
		
		// itemBoxList
		const itemBoxList = this.add.container(731, 183);
		
		// itemBox1
		const itemBox1 = this.add.rectangle(5, 9, 128, 128);
		itemBox1.scaleX = 0.6831684239077994;
		itemBox1.scaleY = 0.6831684239077994;
		itemBox1.isFilled = true;
		itemBox1.fillColor = 0;
		itemBoxList.add(itemBox1);
		
		// itemBox2
		const itemBox2 = this.add.rectangle(5, 105, 128, 128);
		itemBox2.scaleX = 0.6831684239077994;
		itemBox2.scaleY = 0.6831684239077994;
		itemBox2.isFilled = true;
		itemBox2.fillColor = 0;
		itemBoxList.add(itemBox2);
		
		// itemBox3
		const itemBox3 = this.add.rectangle(5, 201, 128, 128);
		itemBox3.scaleX = 0.6831684239077994;
		itemBox3.scaleY = 0.6831684239077994;
		itemBox3.isFilled = true;
		itemBox3.fillColor = 0;
		itemBoxList.add(itemBox3);
		
		// itemBox4
		const itemBox4 = this.add.rectangle(5, 297, 128, 128);
		itemBox4.scaleX = 0.6831684239077994;
		itemBox4.scaleY = 0.6831684239077994;
		itemBox4.isFilled = true;
		itemBox4.fillColor = 0;
		itemBoxList.add(itemBox4);
		
		// itemListDown
		const itemListDown = this.add.triangle(5, 393, 0, 128, 64, 0, 128, 128);
		itemListDown.scaleY = -0.4353690800990503;
		itemListDown.isFilled = true;
		itemListDown.fillColor = 16383;
		itemBoxList.add(itemListDown);
		
		// itemListUp
		const itemListUp = this.add.triangle(5, -87, 0, 128, 64, 0, 128, 128);
		itemListUp.scaleY = 0.49720248568664815;
		itemListUp.isFilled = true;
		itemListUp.fillColor = 16383;
		itemBoxList.add(itemListUp);
		
		// sceneSwitchButton
		const sceneSwitchButton = this.add.container(34, 43);
		
		// sceneUp
		const sceneUp = new SceneSwitchButton(this, 286, -11);
		sceneSwitchButton.add(sceneUp);
		
		// sceneRight
		const sceneRight = new SceneSwitchButton(this, 574, 277);
		sceneRight.angle = 90;
		sceneSwitchButton.add(sceneRight);
		
		// sceneDown
		const sceneDown = new SceneSwitchButton(this, 286, 533);
		sceneDown.angle = -180;
		sceneSwitchButton.add(sceneDown);
		
		// sceneLeft
		const sceneLeft = new SceneSwitchButton(this, -2, 277);
		sceneLeft.angle = -90;
		sceneSwitchButton.add(sceneLeft);
		
		// showPosition
		const showPosition = this.add.text(126, 61, "", {});
		showPosition.setOrigin(0.5, 0.5);
		showPosition.text = "Unknown Room\n";
		showPosition.setStyle({"fontSize":"30px"});
		
		// itemBox1 (components)
		itemBox1.emit("components-awake");
		
		// itemBox2 (components)
		itemBox2.emit("components-awake");
		
		// itemBox3 (components)
		itemBox3.emit("components-awake");
		
		// itemBox4 (components)
		itemBox4.emit("components-awake");
		
		// sceneUp (prefab fields)
		sceneUp.direction = "Up";
		sceneUp.emit("prefab-awake");
		
		// sceneRight (prefab fields)
		sceneRight.direction = "Right";
		sceneRight.emit("prefab-awake");
		
		// sceneDown (prefab fields)
		sceneDown.direction = "Down";
		sceneDown.emit("prefab-awake");
		
		// sceneLeft (prefab fields)
		sceneLeft.direction = "Left";
		sceneLeft.emit("prefab-awake");
		
		this.bg = bg;
		this.itemBoxList = itemBoxList;
		this.sceneSwitchButton = sceneSwitchButton;
		this.showPosition = showPosition;
	}
	
	public bg: Phaser.GameObjects.Image|undefined;
	private itemBoxList: Phaser.GameObjects.Container|undefined;
	private sceneSwitchButton: Phaser.GameObjects.Container|undefined;
	private showPosition: Phaser.GameObjects.Text|undefined;
	
	/* START-USER-CODE */

	// Write your code here
	// roomList: JSON = "asserts/roomList.json";
	public info: Info | undefined;//backend of game infomation
	// public bg: Phaser.GameObjects.Image | undefined
	public showObjs: ShowObjs | undefined;
	myCreate() {
		// this.bg = this.pvbg
		this.info = new Info(this);
		this.showObjs = new ShowObjs(this);
		this.guiInit()

		this.info.init();
		this.showObjs.init()
	}
	create() {

		this.editorCreate();
		// this.info = new Info(this);
		this.myCreate();
		// var t = this.add.polygon(0, 0, [0, 0, 0, 100, 100, 100, 100, 0], 0xff00ff, 0.5)

		// console.log(t)
		// this.infoChange("");
		// this.bg?.setDisplaySize(650, 600)



	}
	guiInit() {
		this.sceneSwitchButton?.iterate((button: SceneSwitchButton) => {
			button.setVisible(false)
			button.setInteractive().on("pointerdown", () => {
				this.infoChange("moveScene", {
					"scene": button.toScene
				});
			})
		}, this)
	}
	guiUpdate() {
		this.sceneSwitchButton?.iterate((button: SceneSwitchButton) => {
			// console
			let info = this.info as Info
			let room = info.room, scene = info.scene
			let roomTable = this.cache.json.get("roomList")[room]
			let sceneTable = roomTable.scenes[scene]
			let move = sceneTable.move;
			button.toScene = move[button.direction];
			button.setVisible(button.toScene != -1);
			//word
			(this.showPosition as Phaser.GameObjects.Text).setText(roomTable.floor + "F·" + room);
			// console.log(button)
			// console.log(button.direction + ":" + button.toScene.toString())
		})
	}
	infoChange(type: string, args: any = null) {//duck type of update operation
		let info = this.info as Info, showObjs = this.showObjs as ShowObjs
		try {
			switch (type) {
				case "": break
				case "moveToRoom":
					info.moveToRoom(args["scene"], args["room"])
					showObjs.updateScene()
					console.log("move to room:" + args["scene"] + args["room"])
					break
				case "moveScene":
					info.moveScene(args["scene"])
					showObjs.updateRoom()
					console.log("move scene:" + args["scene"])
					break
				case "showWord":
				// showObjs
				case "getItem":
					info.addItem(args["itemName"])
				// showObjs.updateScene()
				// info.
				case "loseItem":
					info.removeItem(args["itemName"])

				case "addFlag":
				default:
					console.warn("Unknow update operation: " + type);
					break
			}
		}
		catch (e) {
			console.warn("Wrong arguments type for operation: " + type);
			console.warn(args);
			throw e
		}

		info.state.update();
		// console.log(this.info)
		// this.renderChange();
	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
class Info {
	state: Plot.Content;
	items: string[] = [];
	room: string = "";
	scene: number = -1;
	flags = {};
	constructor(rs: RoomScene) {
		this.state = new Plot.Content(rs, this)
	}
	init() {
		this.state.init()
	}

	moveToRoom(scene: number, room: string) {
		this.scene = scene;
		this.room = room;
	}

	moveScene(scene: number) {
		this.scene = scene;
	}

	addItem(itemName: string) {
		this.items.push(itemName);
	}
	removeItem(itemName: string) {
		const index = this.items.indexOf(itemName);
		if (index > -1) this.items.splice(index, 1);
		else console.error("No item found:" + itemName);
	}

}

//State machine for the Plot
namespace Plot {

	// state pattern
	// export var initState = (info: Info) => { return new Init(info) }
	export class Content {
		state: State = new NullState(this)
		info: Info
		rs: RoomScene
		// infoChange: (arg0: string, arg1: any) => void
		update = () => { this.state.update() }
		stateChange = (newState: State) => {
			this.state.out();
			this.state = newState;
			newState.enter();
		}
		constructor(rs: RoomScene, info: Info) {
			this.rs = rs
			this.info = info
		}
		init() {
			this.state = new Init(this);
			this.state.enter()
		}

	}
	abstract class State {
		content: Content
		rs: RoomScene
		info: Info
		update = () => { }
		out = () => { }
		enter = () => { }

		constructor(content: Content) {
			this.content = content;
			this.rs = content.rs
			this.info = content.info
		}
	}
	class NullState extends State {

	}
	class Init extends State {
		override enter = () => {
			this.rs.infoChange("moveToRoom", { "room": "大厅", "scene": 0 })
		}
		override update = () => {
			if (this.rs.info?.scene == 2)
				this.content.stateChange(new Wakeup(this.content));
		}
	}

	class Wakeup extends State {
		override enter = () => {
			console.log("Enter state Wakeup.")
		}
		override update = () => {
			console.log("State 2!")
		}
	}
}

class ObjsInScene {
	protected rs: RoomScene
	protected toPos: { room: string, scene: number }
	protected hitArea: Phaser.Geom.Polygon
	protected graphic: Phaser.GameObjects.Polygon | undefined
	constructor(rs: RoomScene, toPos: any, hitArea: any) {
		this.rs = rs
		this.toPos = { room: toPos.room, scene: toPos.scene }
		// console.log("this.toPos")
		// console.log(this.toPos)
		this.hitArea = new Phaser.Geom.Polygon(hitArea)

		// this.hitArea=new Phaser.GameObjects.Polygon
	}
	//交互功能，f为按下后的回调函数
	_activate(f: Function) {
		let rs = this.rs
		var graphic = rs.add.polygon(0, 0, this.hitArea.points)
		graphic.setOrigin(0, 0)
		// this.hitArea.setInteractive(this.hitArea, Phaser.Geom.Polygon.Contains)
		graphic.setInteractive(this.hitArea, Phaser.Geom.Polygon.Contains).on
			("pointerdown", f)
		// console.log("Doorset:" + this.hitArea)
		// this.hitArea.isFilled = true
		this.graphic = graphic
		// this.hitArea.fillColor = 0xffffff
	}
	activate() { }
	deactivate() { this.graphic?.destroy() }
}
class Door extends ObjsInScene {

	// constructor(rs: RoomScene, toPos: any, hitArea: any) {
	// 	super(rs, toPos, hitArea)
	// }
	activate() {
		// let rs = this.rs
		super._activate(() => {
			this.rs.infoChange("moveToRoom", this.toPos);
		})
		var graphic = this.graphic as Phaser.GameObjects.Polygon
		if (Global.DEBUG==true){
			// console.log("DEBUG=True!")
			graphic.setFillStyle(0xff00ff,0.5)
		// graphic.fillAlpha = 0.5
		
		}
	}
}
class Item extends ObjsInScene {
	private itemName: string
	private itemImg: Phaser.GameObjects.Image | undefined
	private imginit: Function
	constructor(rs: RoomScene, toPos: any, hitArea: any, itemName: string) {
		super(rs, toPos, hitArea)
		this.itemName = itemName
		let graphic = this.graphic as Phaser.GameObjects.Polygon
		graphic.fillColor = 0x0000ff
		graphic.fillAlpha = 0.5
		this.imginit = () => { return rs.add.image(0, 0, rs.cache.json.get("itemList")[itemName]) }
	}
	activate() {
		this.itemImg = this.imginit()
		super._activate(() => {
			this.rs.infoChange("getItem", this.itemName);
			this.itemImg?.destroy()
			this.deactivate()
		})
	}

	deactivate() {
		super.deactivate()
		this.itemImg?.destroy()
	}
}
class Puzzle {
	
}

class ShowObjs {// modify what you see
	rs: RoomScene
	// info: Info
	bg: Phaser.GameObjects.Image | undefined//this.add.image(0, 0, "__DEFAULT"),
	doorList: Door[] = []
	itemList: Item[] = []
	puzzleList: Puzzle = []
	// },
	constructor(rs: RoomScene) {
		this.rs = rs

	}
	init() {
		this.bg = this.rs.bg as Phaser.GameObjects.Image

		// this.bg.setOrigin(0, 0);
		// this.bg.setSize
		// this.bg.setSize(1, 1);

		// this.bg.renderFlags
		this.clean()
		// this.updateRoom();
		this.updateScene();

	}

	clean() {
	}
	updateRoom() {
		// this.rs.add.tween({
		// 	yoyo:
		// })
		this.updateScene()
	}
	updateScene() {
		let info = this.rs.info as Info
		let room = info.room, scene = info.scene
		let sceneTable = this.rs.cache.json.get("roomList")[room].scenes[scene]
		let move = sceneTable.move;
		let bgTexture = sceneTable.texture
		let doorTable = sceneTable.door
		let itemTable = sceneTable.item
		this.rs.input.mouse.enabled = false
		this.rs.cameras.main.fadeOut(200)
		this.rs.cameras.main.once(

			'camerafadeoutcomplete', (camera: Phaser.Cameras.Scene2D.Camera) => {
				this.bgUpdate(bgTexture)
				this.doorUpdate(doorTable)
				this.itemUpdate(itemTable)
				this.rs.guiUpdate()
				camera.fadeIn(200)
				this.rs.cameras.main.once(
					'camerafadeincomplete', (camera: Phaser.Cameras.Scene2D.Camera) => {
						this.rs.input.mouse.enabled = true
					})
			}
		);

		// this.rs.cameras.scene as RoomScene
	}
	bgUpdate(bgTexture: any) {
		// this.rs.transition({
		// 	targets: this.bg,
		// 	duration: 300,
		// 	f
		// })
		// this.rs.cameras.main.fade(300)
		this.bg?.setTexture(bgTexture)
		this.bg?.setDisplaySize(630., 600.);

	}
	doorUpdate(doorTable: any) {
		for (let d of this.doorList) {
			d.deactivate()
			// d.hitArea?.setVisible(false)
			// d.hitArea?.destroy()
		};
		this.doorList = []
		if (doorTable != undefined) {
			for (let e of doorTable) {
				// console.log("DOOR:")
				console.log(e.hitArea)
				let d = new Door(
					this.rs,e.toPos, e.hitArea
				)
				d.activate()
				this.doorList.push(d)
			}
		}
	}
	itemUpdate(itemTable: any) {
		for (let t of this.itemList) {
			t.deactivate()
		}
		this.itemList = []
		if (itemTable != undefined) {
			for (let e of itemTable) {
				// console.log("DOOR:")
				console.log(e.hitArea)
				let d = new Item(
					this.rs, e.toPos, e.hitArea, e.name
				)
				d.activate()
				this.itemList.push(d)
			}
		}
	}
	// updateRoom = () => {
	// 	var room = this.rs.info.room
	// 	var roomTable = this.rs.cache.json.get("roomList")[room]

	// 	this.updateScene()
	// }
	// init = () => {
	// 	// this.clean();


	// }
}