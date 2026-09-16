const Discord = require('discord.js');
const {token} = require('./auth.json');
const bot = new Discord.Client();

bot.login(token);

bot.once('ready', () =>{
    console.log(Bot ready, logged in as ${bot.user.tag}!);
})

bot.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannelID
    let oldUserChannel = oldMember.voiceChannelID

    if(newUserChannel === 712677767333937284) {
        // User Joins a voice channel
        console.log("Joined VC1")

    } else if(newUserChannel !== 712677767333937284){
        // User leaves a voice channel
        console.log("Left VC1")

    }
})
