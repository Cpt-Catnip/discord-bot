// parse .env
require('dotenv').config();

// import modules
const Discord = require('discord.js');

// create client
const client = new Discord.Client();
client.login(process.env.TOKEN);

// even handlers
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const onMessage = require('./commands');

client.on('message', onMessage);
