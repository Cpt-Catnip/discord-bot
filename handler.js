const commands = require('./commands');

module.exports = async function (msg) {
  // check if bot should pay attention
  const usesPrefix = msg.content[0] === process.env.PREFIX;
  if (!usesPrefix) return;
  const isTestChannel = msg.channel.id === process.env.TESTCHANNELID;
  if (!isTestChannel) return;

  // handle request
  const req = msg.content.slice(1);
  const tokens = req.split(' ');
  const cmd = tokens[0];
  const args = tokens.slice(1);

  // call command
  commands[cmd](msg, args);
};
