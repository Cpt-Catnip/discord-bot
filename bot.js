// parse .env
require('dotenv').config();

// import modules
const Discord = require('discord.js');
const fetch = require('node-fetch');

// create client
const client = new Discord.Client();
client.login(process.env.TOKEN);

// even handlers
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const onMessage = async function (msg) {
  // check if bot should pay attention
  const isTestChannel = msg.channel.id === process.env.TESTCHANNELID;
  const usesPrefix = msg.content[0] === process.env.PREFIX;
  if (!usesPrefix || !isTestChannel) return;

  // handle request
  const req = msg.content.slice(1);
  const tokens = req.split(' ');
  const cmd = tokens[0];

  if (cmd === 'ping') {
    msg.channel.send('pong');
  } else if (cmd === 'gif') {
    // get search term
    const query = tokens.slice(1).join(' ') || 'animal crossing';

    // get gif
    const url = `https://api.tenor.com/v1/search?q=${query}&key=${process.env.TENORKEY}`;
    let response = await fetch(url);
    response = await response.json();

    // pick random gif
    const idx = Math.floor(Math.random() * response.results.length);

    // respond in channel with gif
    msg.channel.send(response.results[idx].url);
  }
};

client.on('message', onMessage);
