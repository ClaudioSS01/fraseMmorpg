var PhaserMMORPG = PhaserMMORPG || {};

PhaserMMORPG.Avatar = function(game, name, initialX, initialY) {
  
  name = name || 'Player name';
  initialX = initialX || 84;
  initialY = initialY || 48;

//this.avatar = game.add.group();

  //  Player
  this.player = game.add.sprite(initialX, initialY, 'playerDude', 1);
  
  var tints = [0xf000f0, 0xff00ff, 0x00ffff, 0x00ff00, 0xff5500, 0x0055ff, 0x55ff00];
  
  this.player.tint = tints[Math.floor(Math.random() * tints.length)];
  
  this.player.anchor.set(0.5, 0.5);

  this.player.animations.add('left', [0, 1, 2, 3], 10, true);
  this.player.animations.add('right', [5, 6, 7, 8], 10, true);
  this.player.animations.add('up', [4], 10, true);
  this.player.animations.add('down', [4], 10, true);

  game.physics.enable(this.player, Phaser.Physics.ARCADE);


  //player name text
  this.playerName = game.add.text(0, -30, name, { font: '10px Arial', fill: '#444444', align: 'center' }); 
  this.playerName.anchor.setTo(0.5);
  
  
    //player.body.setSize(100, 140, 2, 1);
  this.player.body.collideWorldBounds = true;
  this.player.body.setSize(10, 20, 0, 0);
  
  
  //this.avatar.add(this.player);
  //this.avatar.add(this.playerName);
  
  this.player.addChild(this.playerName);
  
  return this.player;

}