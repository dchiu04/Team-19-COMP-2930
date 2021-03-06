class TitleScene extends Phaser.Scene {
	constructor() {
		super({
			key: "TitleScene"
		});
		this.scalingAmt = 1.0;
	}
    
	preload() {
    }

	create() {
        
		//Music
		titleMusic = this.sound.add('bg', musicConfig);
		titleMusic.play(musicConfig);

		let background = this.add.sprite(0, 0, 'background_image');
		background.setOrigin(0, 0);
        
		//Create title text
		titleText = this.add.text(120, 70, 'Save the Forest', { fontSize: '128px', fill: 'white', fontFamily: 'VT323' });
		
		//Workaround for score text not showing up properly
		titleText.visible = false;

		//Campfire animations setup
		let campAnimConfig = {
			key: 'camping',
			frames: this.anims.generateFrameNumbers('campFire', {
				start: 0,
				end: 7,
				first: 7
			}),
			frameRate: 8,
			repeat: -1
		};

		//Creating and adding the campfire sprite to title page
		animCamp = this.anims.create(campAnimConfig);
		spriteCamp = this.add.sprite(600, 450, 'campFire').setScale(0.5);


		spriteCamp.anims.play('camping');

		//Create start buttons
		startBtn = this.add.sprite(500, 300, 'startButt').setInteractive();
		startSound = this.sound.add('startPlay', waterConfig);

		/* Start button functionality */
		startBtn.on('pointerover', changeColor);

		startBtn.on('pointerout', revertColor);

		//Event handler for start button
		startBtn.on('pointerdown', function () {

			startSound.play();
            
			this.scene.start('GamePreload');
		}, this);

		// On start button press  
		startBtn.on('pointerdown', startGame);  
	}
}

//Function for stopping start screen music
function startGame() {
	start = true;
	titleMusic.stop();
}
//export default TitleScene;
