"use strict";
class Global {
    static getInstance() {
        if (!Global.instance) {
            Global.instance = new Global();
        }
        return Global.instance;
    }
}
Global.DEBUG = true;
window.addEventListener('load', function () {
    var game = new Phaser.Game({
        width: 800,
        height: 600,
        type: Phaser.AUTO,
        backgroundColor: "#353535",
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH
        }
    });
    game.scene.add("StartPage", StartPage);
    game.scene.add("Level", Level);
    game.scene.add("RoomScene", RoomScene);
    game.scene.add("Boot", Boot, true);
});
class Boot extends Phaser.Scene {
    preload() {
        this.load.pack("pack", "assets/asset-pack.json");
    }
    create() {
        this.scene.start("StartPage");
    }
}
// You can write more code here
/* START OF COMPILED CODE */
class Component {
    constructor(gameObject) {
        this.property1 = "";
        this.gameObject = gameObject;
        gameObject["__Component"] = this;
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    static getComponent(gameObject) {
        return gameObject["__Component"];
    }
}
/* END OF COMPILED CODE */
// You can write more code here
class UserComponent {
    /**
     * @param gameObject The entity.
     */
    constructor(gameObject) {
        this.scene = gameObject.scene;
        const listenAwake = this.awake !== UserComponent.prototype.awake;
        const listenStart = this.start !== UserComponent.prototype.start;
        const listenUpdate = this.update !== UserComponent.prototype.update;
        const listenDestroy = this.destroy !== UserComponent.prototype.destroy;
        if (listenAwake) {
            gameObject.once("components-awake", this.awake, this);
        }
        if (listenStart) {
            this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
        }
        if (listenUpdate) {
            this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
        }
        if (listenStart || listenUpdate || listenDestroy) {
            gameObject.on(Phaser.GameObjects.Events.DESTROY, () => {
                this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.start, this);
                this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
                if (listenDestroy) {
                    this.destroy();
                }
            });
        }
    }
    awake() {
        // override this
    }
    start() {
        // override this
    }
    update() {
        // override this
    }
    destroy() {
        // override this
    }
}
/// <reference path="./UserComponent.ts"/>
// You can write more code here
/* START OF COMPILED CODE */
class PushOnClick extends UserComponent {
    constructor(gameObject) {
        super(gameObject);
        this.gameObject = gameObject;
        gameObject["__PushOnClick"] = this;
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    static getComponent(gameObject) {
        return gameObject["__PushOnClick"];
    }
    /* START-USER-CODE */
    awake() {
        this.gameObject.setInteractive().on("pointerdown", () => {
            this.scene.add.tween({
                targets: this.gameObject,
                scaleX: 0.8,
                scaleY: 0.8,
                duration: 80,
                yoyo: true
            });
        });
    }
}
/* END OF COMPILED CODE */
// You can write more code here
// You can write more code here
/* START OF COMPILED CODE */
class RoomComponent extends UserComponent {
    constructor(gameObject) {
        super(gameObject);
        this.roomName = "Noname Room";
        this.floor = 0;
        this.gameObject = gameObject;
        gameObject["__RoomComponent"] = this;
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    static getComponent(gameObject) {
        return gameObject["__RoomComponent"];
    }
}
/* END OF COMPILED CODE */
// You can write more code here
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
        text_1.setStyle({ "fontFamily": "arial", "fontSize": "3em" });
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
    /* START-USER-CODE */
    // Write your code here.
    create() {
        var _a, _b, _c, _d;
        this.editorCreate();
        (_a = this.back) === null || _a === void 0 ? void 0 : _a.setInteractive();
        // this.back?.on('pointerover', (button: Phaser.GameObjects.Image) => {
        // 	console.log("Pointerover");
        // 	button.setTint(0x339933);
        // }, this.back);
        (_b = this.back) === null || _b === void 0 ? void 0 : _b.on('pointerover', () => {
            var _a;
            console.log("Pointerover");
            (_a = this.back) === null || _a === void 0 ? void 0 : _a.setTint(0x339933);
        });
        (_c = this.back) === null || _c === void 0 ? void 0 : _c.on('pointerout', () => {
            var _a;
            console.log("Pointerout");
            (_a = this.back) === null || _a === void 0 ? void 0 : _a.clearTint();
        });
        (_d = this.back) === null || _d === void 0 ? void 0 : _d.once('pointerdown', () => {
            console.log("Clicked");
            this.scene.start("RoomScene");
        });
        // console.log("changed");
        // this.add.polygon(100, 0,
        // 	[0, 0, 0, 100, 100, 100, 100, 0]
        // 	, 0xff00ff, 0.5)
        var p = this.add.polygon(0, 0, [0, 0, 0, 100, 100, 100, 100, 0]);
        p.fillColor = 0xff00ff;
        p.fillAlpha = 0.5;
        var sp;
        sp = this.add.text(96, 32, "", {});
        sp.setOrigin(0.5, 0.5);
        sp.text = "Unknown Room\n";
        sp.setStyle({ "fontSize": "20px" });
        sp.setText("1919");
        // sp.destroy()
        sp.setText("114514");
        console.log(p);
    }
}
/* END OF COMPILED CODE */
// You can write more code here
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
        showPosition.setStyle({ "fontSize": "30px" });
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
    myCreate() {
        // this.bg = this.pvbg
        this.info = new Info(this);
        this.showObjs = new ShowObjs(this);
        this.guiInit();
        this.info.init();
        this.showObjs.init();
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
        var _a;
        (_a = this.sceneSwitchButton) === null || _a === void 0 ? void 0 : _a.iterate((button) => {
            button.setVisible(false);
            button.setInteractive().on("pointerdown", () => {
                this.infoChange("moveScene", {
                    "scene": button.toScene
                });
            });
        }, this);
    }
    guiUpdate() {
        var _a;
        (_a = this.sceneSwitchButton) === null || _a === void 0 ? void 0 : _a.iterate((button) => {
            // console
            let info = this.info;
            let room = info.room, scene = info.scene;
            let roomTable = this.cache.json.get("roomList")[room];
            let sceneTable = roomTable.scenes[scene];
            let move = sceneTable.move;
            button.toScene = move[button.direction];
            button.setVisible(button.toScene != -1);
            //word
            this.showPosition.setText(roomTable.floor + "F·" + room);
            // console.log(button)
            // console.log(button.direction + ":" + button.toScene.toString())
        });
    }
    infoChange(type, args = null) {
        let info = this.info, showObjs = this.showObjs;
        try {
            switch (type) {
                case "": break;
                case "moveToRoom":
                    info.moveToRoom(args["scene"], args["room"]);
                    showObjs.updateScene();
                    console.log("move to room:" + args["scene"] + args["room"]);
                    break;
                case "moveScene":
                    info.moveScene(args["scene"]);
                    showObjs.updateRoom();
                    console.log("move scene:" + args["scene"]);
                    break;
                case "showWord":
                // showObjs
                case "getItem":
                    info.addItem(args["itemName"]);
                // showObjs.updateScene()
                // info.
                case "loseItem":
                    info.removeItem(args["itemName"]);
                case "addFlag":
                default:
                    console.warn("Unknow update operation: " + type);
                    break;
            }
        }
        catch (e) {
            console.warn("Wrong arguments type for operation: " + type);
            console.warn(args);
            throw e;
        }
        info.state.update();
        // console.log(this.info)
        // this.renderChange();
    }
}
/* END OF COMPILED CODE */
// You can write more code here
class Info {
    constructor(rs) {
        this.items = [];
        this.room = "";
        this.scene = -1;
        this.flags = {};
        this.state = new Plot.Content(rs, this);
    }
    init() {
        this.state.init();
    }
    moveToRoom(scene, room) {
        this.scene = scene;
        this.room = room;
    }
    moveScene(scene) {
        this.scene = scene;
    }
    addItem(itemName) {
        this.items.push(itemName);
    }
    removeItem(itemName) {
        const index = this.items.indexOf(itemName);
        if (index > -1)
            this.items.splice(index, 1);
        else
            console.error("No item found:" + itemName);
    }
}
//State machine for the Plot
var Plot;
(function (Plot) {
    // state pattern
    // export var initState = (info: Info) => { return new Init(info) }
    class Content {
        constructor(rs, info) {
            this.state = new NullState(this);
            // infoChange: (arg0: string, arg1: any) => void
            this.update = () => { this.state.update(); };
            this.stateChange = (newState) => {
                this.state.out();
                this.state = newState;
                newState.enter();
            };
            this.rs = rs;
            this.info = info;
        }
        init() {
            this.state = new Init(this);
            this.state.enter();
        }
    }
    Plot.Content = Content;
    class State {
        constructor(content) {
            this.update = () => { };
            this.out = () => { };
            this.enter = () => { };
            this.content = content;
            this.rs = content.rs;
            this.info = content.info;
        }
    }
    class NullState extends State {
    }
    class Init extends State {
        constructor() {
            super(...arguments);
            this.enter = () => {
                this.rs.infoChange("moveToRoom", { "room": "大厅", "scene": 0 });
            };
            this.update = () => {
                var _a;
                if (((_a = this.rs.info) === null || _a === void 0 ? void 0 : _a.scene) == 2)
                    this.content.stateChange(new Wakeup(this.content));
            };
        }
    }
    class Wakeup extends State {
        constructor() {
            super(...arguments);
            this.enter = () => {
                console.log("Enter state Wakeup.");
            };
            this.update = () => {
                console.log("State 2!");
            };
        }
    }
})(Plot || (Plot = {}));
class ObjsInScene {
    constructor(rs, toPos, hitArea) {
        this.rs = rs;
        this.toPos = { room: toPos.room, scene: toPos.scene };
        // console.log("this.toPos")
        // console.log(this.toPos)
        this.hitArea = new Phaser.Geom.Polygon(hitArea);
        // this.hitArea=new Phaser.GameObjects.Polygon
    }
    //交互功能，f为按下后的回调函数
    _activate(f) {
        let rs = this.rs;
        var graphic = rs.add.polygon(0, 0, this.hitArea.points);
        graphic.setOrigin(0, 0);
        // this.hitArea.setInteractive(this.hitArea, Phaser.Geom.Polygon.Contains)
        graphic.setInteractive(this.hitArea, Phaser.Geom.Polygon.Contains).on("pointerdown", f);
        // console.log("Doorset:" + this.hitArea)
        // this.hitArea.isFilled = true
        this.graphic = graphic;
        // this.hitArea.fillColor = 0xffffff
    }
    activate() { }
    deactivate() { var _a; (_a = this.graphic) === null || _a === void 0 ? void 0 : _a.destroy(); }
}
class Door extends ObjsInScene {
    // constructor(rs: RoomScene, toPos: any, hitArea: any) {
    // 	super(rs, toPos, hitArea)
    // }
    activate() {
        // let rs = this.rs
        super._activate(() => {
            this.rs.infoChange("moveToRoom", this.toPos);
        });
        var graphic = this.graphic;
        if (Global.DEBUG == true) {
            // console.log("DEBUG=True!")
            graphic.setFillStyle(0xff00ff, 0.5);
            // graphic.fillAlpha = 0.5
        }
    }
}
class Item extends ObjsInScene {
    constructor(rs, toPos, hitArea, itemName) {
        super(rs, toPos, hitArea);
        this.itemName = itemName;
        let graphic = this.graphic;
        graphic.fillColor = 0x0000ff;
        graphic.fillAlpha = 0.5;
        this.imginit = () => { return rs.add.image(0, 0, rs.cache.json.get("itemList")[itemName]); };
    }
    activate() {
        this.itemImg = this.imginit();
        super._activate(() => {
            var _a;
            this.rs.infoChange("getItem", this.itemName);
            (_a = this.itemImg) === null || _a === void 0 ? void 0 : _a.destroy();
            this.deactivate();
        });
    }
    deactivate() {
        var _a;
        super.deactivate();
        (_a = this.itemImg) === null || _a === void 0 ? void 0 : _a.destroy();
    }
}
class Puzzle {
}
class ShowObjs {
    // },
    constructor(rs) {
        this.doorList = [];
        this.itemList = [];
        this.puzzleList = [];
        this.rs = rs;
    }
    init() {
        this.bg = this.rs.bg;
        // this.bg.setOrigin(0, 0);
        // this.bg.setSize
        // this.bg.setSize(1, 1);
        // this.bg.renderFlags
        this.clean();
        // this.updateRoom();
        this.updateScene();
    }
    clean() {
    }
    updateRoom() {
        // this.rs.add.tween({
        // 	yoyo:
        // })
        this.updateScene();
    }
    updateScene() {
        let info = this.rs.info;
        let room = info.room, scene = info.scene;
        let sceneTable = this.rs.cache.json.get("roomList")[room].scenes[scene];
        let move = sceneTable.move;
        let bgTexture = sceneTable.texture;
        let doorTable = sceneTable.door;
        let itemTable = sceneTable.item;
        this.rs.input.mouse.enabled = false;
        this.rs.cameras.main.fadeOut(200);
        this.rs.cameras.main.once('camerafadeoutcomplete', (camera) => {
            this.bgUpdate(bgTexture);
            this.doorUpdate(doorTable);
            this.itemUpdate(itemTable);
            this.rs.guiUpdate();
            camera.fadeIn(200);
            this.rs.cameras.main.once('camerafadeincomplete', (camera) => {
                this.rs.input.mouse.enabled = true;
            });
        });
        // this.rs.cameras.scene as RoomScene
    }
    bgUpdate(bgTexture) {
        var _a, _b;
        // this.rs.transition({
        // 	targets: this.bg,
        // 	duration: 300,
        // 	f
        // })
        // this.rs.cameras.main.fade(300)
        (_a = this.bg) === null || _a === void 0 ? void 0 : _a.setTexture(bgTexture);
        (_b = this.bg) === null || _b === void 0 ? void 0 : _b.setDisplaySize(630., 600.);
    }
    doorUpdate(doorTable) {
        for (let d of this.doorList) {
            d.deactivate();
            // d.hitArea?.setVisible(false)
            // d.hitArea?.destroy()
        }
        ;
        this.doorList = [];
        if (doorTable != undefined) {
            for (let e of doorTable) {
                // console.log("DOOR:")
                console.log(e.hitArea);
                let d = new Door(this.rs, e.toPos, e.hitArea);
                d.activate();
                this.doorList.push(d);
            }
        }
    }
    itemUpdate(itemTable) {
        for (let t of this.itemList) {
            t.deactivate();
        }
        this.itemList = [];
        if (itemTable != undefined) {
            for (let e of itemTable) {
                // console.log("DOOR:")
                console.log(e.hitArea);
                let d = new Item(this.rs, e.toPos, e.hitArea, e.name);
                d.activate();
                this.itemList.push(d);
            }
        }
    }
}
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
        title.setStyle({ "backgroundColor": "#00b6e3ff", "color": "#9a0000ff", "fontFamily": "微软雅黑, Simsun, Courier", "fontSize": "64px", "stroke": "#028400ff", "strokeThickness": 6 });
        // startbutton
        const startbutton = this.add.rectangle(619, 481, 128, 128);
        startbutton.isFilled = true;
        startbutton.fillColor = 166158;
        this.title = title;
        this.startbutton = startbutton;
    }
    /* START-USER-CODE */
    // Write your code here
    create() {
        var _a, _b;
        Global.getInstance();
        this.editorCreate();
        (_a = this.startbutton) === null || _a === void 0 ? void 0 : _a.setInteractive();
        (_b = this.startbutton) === null || _b === void 0 ? void 0 : _b.once('pointerdown', () => {
            console.log("Clicked");
            this.scene.start("Level");
        });
        // this.scene.start("Level");
    }
}
/* END OF COMPILED CODE */
// You can write more code here
// You can write more code here
/* START OF COMPILED CODE */
class SceneSwitchButton extends Phaser.GameObjects.Triangle {
    constructor(scene, x, y, x1, y1, x2, y2, x3, y3) {
        super(scene, x, y, typeof x1 === "number" ? x1 : 0, typeof y1 === "number" ? y1 : 128, typeof x2 === "number" ? x2 : 64, typeof y2 === "number" ? y2 : 0, typeof x3 === "number" ? x3 : 128, typeof y3 === "number" ? y3 : 128);
        this.direction = "";
        this.toScene = 0;
        this.scaleY = 0.37016706926192194;
        this.isFilled = true;
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
}
/* END OF COMPILED CODE */
// You can write more code here
