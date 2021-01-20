require('dotenv').config();
const Discord = require('discord.js');

// create client
const client = new Discord.Client();
client.login(process.env.TOKEN);

// even handlers
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  const isTestChannel = msg.channel.id === process.env.TESTCHANNELID;

  console.log(msg.content);
  if (isTestChannel && msg.content === 'ping') {
    msg.channel.send('pong');
  }
});
