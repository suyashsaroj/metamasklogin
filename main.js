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

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;

//import Phaser from 'phaser';
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

//loading assets
function preload ()
{
}
//initial setup
function create ()
{
}
//60times per second
function update ()
{
    //LOGIC
}

