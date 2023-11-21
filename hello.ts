const GoogleHomePlayer = require('google-home-player')
;
const ip = '192.168.10.117'; // your Google Home's ip address
const googleHome = new GoogleHomePlayer(ip, 'ja');

const example = async () => {
    await googleHome.say('first text');
    await googleHome.say('second text', 'ja', true);
    await googleHome.say('final text');
    console.log('done');
  };
  
  example().catch(err => {
    console.error(err);
  });