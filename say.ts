const GoogleHomePlayer = require('google-home-player');
const ip = '192.168.10.117'; // your Google Home's ip address
const googleHome = new GoogleHomePlayer(ip, 'ja');


export const say = async (word: string): Promise<void> => {
    await googleHome.say(word);
    console.log("say done.");
  };