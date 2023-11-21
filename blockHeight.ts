import { NewBlock, RepositoryFactoryHttp } from "symbol-sdk";
const GoogleHomePlayer = require('google-home-player');
const ip = '192.168.10.117'; // your Google Home's ip address
const googleHome = new GoogleHomePlayer(ip, 'ja');

const nodeUrl = 'https://sym-test-01.opening-line.jp:3001';

const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
const listener = repositoryFactory.createListener();

const say = async (word: string) => {
    await googleHome.say(word);
    console.log('done');
  };

(async() => {
    await listener.open();

    listener.newBlock().subscribe(
        async (block: NewBlock) => {
            console.log(block);
            const height = block.height.toString();
            const word = `ブロック高が${height}に到達しました。`;
            await say(word);
        });
})();
