/** Connect to Moralis server */

const serverUrl = "https://rwc8wfgkdud2.usemoralis.com:2053/server";
const appId = "Al7xK1C3LV5pcHucIFT0ibPE75MZfq3Cc32YwTC9";
Moralis.start({ serverUrl, appId });

/** Add from here down */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
   try {
      user = await Moralis.authenticate({ signingMessage: "Hello World!" })
      console.log(user)
      console.log(user.get('ethAddress'))
   } catch(error) {
     console.log(error)
   }
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}
//
//
const createAligned = (scene, totalWidth, texture, scrollFactor) => {
	const w = scene.textures.get(texture).getSourceImage().width
	const count = Math.ceil(totalWidth / w) * scrollFactor

	let x = 0
	for (let i = 0; i < count; ++i)
	{
		const m = scene.add.image(x, scene.scale.height, texture)
			.setOrigin(0, 1)
			.setScrollFactor(scrollFactor)

		x += m.width
  }
}

///
//

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;

//import Phaser from 'phaser';
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
  },
    
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var platforms;
var blocks;
var player;
var titlesprite;


//loading assets
function preload ()
{
  this.load.image('sky', 'assets/sky.jpg');
  this.load.image('ship', 'assets/ship.png');
  this.load.image('cat', 'assets/cat.png');
  this.load.image('block', 'assets/block.png');
}
//initial setup
function create ()
{
  platforms = this.physics.add.staticGroup();
  blocks = this.physics.add.staticGroup();

  this.cursors = this.input.keyboard.createCursorKeys()
  const width = this.scale.width
	const height = this.scale.height
	const totalWidth = width * 10

	this.add.image(width * 0.5, height * 0.5, 'sky')
		.setScrollFactor(0.25)

  platforms = this.physics.add.staticGroup();
  blocks = this.physics.add.staticGroup();
  blocks.create(20 , 577, 'block').setScale(0.1).refreshBody();
  blocks.create(60 , 577, 'block').setScale(0.1).refreshBody();
  blocks.create(100 , 577, 'block').setScale(0.1).refreshBody();
  blocks.create(140 , 577, 'block').setScale(0.1).refreshBody();
  blocks.create(180 , 577, 'block').setScale(0.1).refreshBody();
  blocks.create(220 , 577, 'block').setScale(0.1).refreshBody();
  blocks.create(260 , 577, 'block').setScale(0.1).refreshBody();
  blocks.create(300 , 577, 'block').setScale(0.1).refreshBody();
  blocks.create(340 , 577, 'block').setScale(0.1).refreshBody();
  blocks.create(380 , 577, 'block').setScale(0.1).refreshBody();
  blocks.create(420 , 577, 'block').setScale(0.1).refreshBody();
  blocks.create(460 , 577, 'block').setScale(0.1).refreshBody();
  blocks.create(500 , 577, 'block').setScale(0.1).refreshBody();
  blocks.create(540 , 577, 'block').setScale(0.1).refreshBody();
  blocks.create(580 , 577, 'block').setScale(0.1).refreshBody();
  blocks.create(620 , 577, 'block').setScale(0.1).refreshBody();
  blocks.create(660 , 577, 'block').setScale(0.1).refreshBody();
  blocks.create(700 , 577, 'block').setScale(0.1).refreshBody();
  blocks.create(740 , 577, 'block').setScale(0.1).refreshBody();
  blocks.create(780 , 577, 'block').setScale(0.1).refreshBody();
  blocks.create(500 , 500, 'block').setScale(0.1).refreshBody();
  blocks.create(600 , 450, 'block').setScale(0.1).refreshBody();
  blocks.create(700 , 400, 'block').setScale(0.1).refreshBody();
  blocks.create(800 , 350, 'block').setScale(0.1).refreshBody();
  

  /*platforms.create(600 , 400, 'ship').setScale(0.1).refreshBody();
  platforms.create(650 , 450, 'ship').setScale(0.1).refreshBody();
  platforms.create(600 , 500, 'ship').setScale(0.1).refreshBody();
  platforms.create(650 , 550, 'ship').setScale(0.1).refreshBody();*/


  //
  player = this.physics.add.sprite(20, 150, 'cat').setScale(0.06);

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  player.body.setGravityY(300)
  
  this.physics.add.collider(player, platforms);

  this.physics.add.collider(player, blocks);

  
  

  //
  
}
//60times per second
function update ()
{
  const cam = this.cameras.main
		const speed = 0.5
   //
   cursors = this.input.keyboard.createCursorKeys();
   if (cursors.up.isDown)
   {
       player.setVelocityY(200);
      
      
   }
   else if (cursors.right.isDown)
   {
       player.setVelocityX(100);
   
       
   }
   else if (cursors.left.isDown)
   {
       player.setVelocityX(-100);
   
       
   }
   else
   {
       player.setVelocityX(0);
   
       
   }
   
   if (cursors.up.isDown && player.body.touching.down)
   {
       player.setVelocityY(-330);
   }
   //

		if (0)
		{
			cam.scrollX += speed
		}
		else if (0)
		{
			cam.scrollX -= speed
		}

	 //LOGIC
}
