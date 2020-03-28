const Discord= require("discord.js");
const client = new Discord.Client();
const bot = client;
const fs = require('fs')
const Canvass = require('canvas');
const snekfetch = require('snekfetch');

////////////////////////////////////////////////////////////////////////////////////

const keepalive = require('express-glitch-keepalive');
app.use(keepalive);
 
app.get('/', (req, res) => {
  res.json('Ok');
});
/////////rainbow role///////////////////////////////////////////////////////////////////////////
client.on("ready", async (message) => {
  
  setInterval(function() {
    const guild = bot.guilds.get("430630483408453633");
  const role = guild.roles.find(r=>r.name === "PAILEV");
    
  let color = [
        '#ecd012',
        '#8edb30',
        '#d3dbd3',
        '#ffffff',
        '#fafdcb',
        '#ffffff',
        '#c0c096'
  ]
  var lol = [Math.floor(Math.random() * color.length)]
  role.setColor(color[lol])
}, 3300)
  
});

////////////////////////////////////////////////////////////////////////////////////
const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;

	do {
		ctx.font = `bold ${fontSize -= 10}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};
const applyText2 = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;

	do {
		ctx.font = `bold ${fontSize -= 10}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

    return ctx.font;
    
};
client.on("guildMemberAdd", async (member, client, message, args, level) => {  
  

    let channel = member.guild.channels.find(ch => ch.name === 'welcome');
    if (!channel) return;
   
	    var imageArray = [
        "https://cdn.discordapp.com/attachments/503595863814438914/578118407619346442/welcome-image4.jpg",
        "https://cdn.discordapp.com/attachments/503595863814438914/578118413566869505/welcome-image5.jpg",
        "https://cdn.discordapp.com/attachments/503595863814438914/578118421057765376/welcome-image7.jpg",
        "https://cdn.discordapp.com/attachments/503595863814438914/578118415114436615/welcome-image6.jpg"

      ];
      var cuddle = [Math.floor(Math.random() * imageArray.length)]
            const guild = member.guild;
      var color = [
        '#ecd012',
        '#8edb30',
        '#d3dbd3',
        '#ffffff',
        '#fafdcb',
        '#ffffff',
        '#c0c096'
      ]
 var random = [Math.floor(Math.random() * color.length)]
 var color2 = [
        '#0000ff',
        '#fff600',
        '#ff0000',
        '#fa00ff',
        '#4cff00',
        '#00ffe1',
        '#ffae00'
      ]
 var random2 = [Math.floor(Math.random() * color.length)]
      
  //	const channel = member.guild.channels.find(ch => ch.name === 'wel-test');
//	if (!channel) return;

	const canvas = Canvass.createCanvas(780, 250);
	const ctx = canvas.getContext('2d');

	
  const background = await Canvass.loadImage(`${imageArray[cuddle]}`);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#000000';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = applyText(canvas, 'Welcome');
	ctx.fillStyle = `${color[random]}`;
	ctx.fillText('Welcome', canvas.width / 3.2, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText2(canvas, `${member.displayName}!`);
	ctx.fillStyle = `${color2[random2]}`;
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.7, canvas.height / 1.8);
     
    let bots = guild.members.filter(m => m.user.bot).size
      let members = member.guild.memberCount
  ctx.font = 'bold 24px DejaVu';
  ctx.fillStyle = '#ffff00';
  ctx.fillText(`: ${members} Member`, canvas.width / 2.82, canvas.height / 1.25);
      
  ctx.font = 'bold 24px DejaVu';
  ctx.fillStyle = '#ffff00';
  ctx.fillText(` : ${bots} Bots`, canvas.width / 1.45, canvas.height / 1.25);
      

  ctx.font = 'bold 24px DejaVu';
  ctx.fillStyle = '#ffff00';
  ctx.fillText(`Hope you'll enjoy your stay`, canvas.width / 1.93, canvas.height / 1.06);

	ctx.beginPath(); 
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
	const avatar = await Canvass.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Welcome To **${guild.name}**,${member}!You are the **${member.guild.memberCount}** Member!`, attachment);
         //   channel.send(`Welcome To **${guild.name}**, **${member}** Hope You Enjoy In This Server\nYou are the **${member.guild.memberCount}** Member!`);
    })

////////////////////////////////////////////////////////////////////////////////////
client.on("guildMemberRemove", async (member, client, message, args, level) => {  
  
 let channel = member.guild.channels.find(ch => ch.name === 'leaveserver');
    if (!channel) return;
   
	    var imageArray = [
        "https://cdn.discordapp.com/attachments/503595863814438914/578118407619346442/welcome-image4.jpg",
        "https://cdn.discordapp.com/attachments/503595863814438914/578118413566869505/welcome-image5.jpg",
        "https://cdn.discordapp.com/attachments/503595863814438914/578118421057765376/welcome-image7.jpg",
        "https://cdn.discordapp.com/attachments/503595863814438914/578118415114436615/welcome-image6.jpg"

      ];
      var cuddle = [Math.floor(Math.random() * imageArray.length)]
      const guild = member.guild;
      var color = [
        '#0000ff',
        '#ff0000',
        '#fff600',
        '#4cff00',
        '#fa00ff',
        '#00ffe1',
        '#ffae00'
      ]
 var random = [Math.floor(Math.random() * color.length)]
 var color2 = [
        '#0000ff',
        '#fff600',
        '#ff0000',
        '#fa00ff',
        '#4cff00',
        '#00ffe1',
        '#ffae00'
      ]
 var random2 = [Math.floor(Math.random() * color.length)]
	const canvas = Canvass.createCanvas(780, 250);
	const ctx = canvas.getContext('2d');

	
  const background = await Canvass.loadImage(`${imageArray[cuddle]}`);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#00d4ff';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '50px sans-serif';
	ctx.fillStyle = `${color[random]}`;
	ctx.fillText(`Goodbye!`, canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = `${color2[random2]}`;
	ctx.fillText(`   ${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

      let bots = guild.members.filter(m => m.user.bot).size
      let members = member.guild.memberCount
  ctx.font = 'bold 24px DejaVu';
  ctx.fillStyle = '#ffff00';
  ctx.fillText(`: ${members} Member`, canvas.width / 2.82, canvas.height / 1.25);
      
  ctx.font = 'bold 24px DejaVu';
  ctx.fillStyle = '#ffff00';
  ctx.fillText(` : ${bots} Bots`, canvas.width / 1.45, canvas.height / 1.25);
      


	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
	const avatar = await Canvass.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'leaveserver-image.png');


	channel.send(`**${member.displayName}** has left **${guild.name}**,In Server has **${member.guild.memberCount}** Member `, attachment);
          });
////////////////////////////////////////////////////////////////////////////////////


   client.on('message', message => { 	
     if (message.content === '!join') { 		client.emit('guildMemberAdd', message.member); 	
                                      } 
     if (message.content === '!leave') { 		client.emit('guildMemberRemove', message.member); 	
                                      } 
   });

////////////////////////////////////////////////////////////////////////////////////
client.login(process.env.TOKEN);
