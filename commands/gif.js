const fetch = require('node-fetch');

module.exports = async function (msg, args) {
  // get search term
  const query = args.join(' ') || 'animal crossing';

  // get gif
  const url = `https://api.tenor.com/v1/search?q=${query}&key=${process.env.TENORKEY}`;
  let response = await fetch(url);
  response = await response.json();

  // pick random gif
  const idx = Math.floor(Math.random() * response.results.length);

  // respond in channel with gif
  msg.channel.send(response.results[idx].url);
};
