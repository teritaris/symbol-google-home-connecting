import { Address, NewBlock, RepositoryFactoryHttp, Transaction, TransferTransaction } from "symbol-sdk";
import { say } from "./say";

// const symbol = require("/node_modules/symbol-sdk"); // browserify使用ツクール向け
const NODE_URL = 'https://sym-test-01.opening-line.jp:3001';
const EPOCH_ADJUSTMENT = 1667250467;

const repositoryFactory = new RepositoryFactoryHttp(NODE_URL);
const transactionHttp = repositoryFactory.createTransactionRepository();
const blockRepo = repositoryFactory.createBlockRepository();

const listener = repositoryFactory.createListener();
const address = "TBOWY7SBDO6T7K3KZMYWMQKSW6CCOUGVPVKZJTQ"

listener.open().then(() => {
    listener.confirmed(Address.createFromRawAddress(address)).subscribe(
        async (tx: Transaction) => {
            // console.log(block);
            // console.log(block.signer);
            // console.log(block.signer.address.address);
            const message = (tx as TransferTransaction).message.payload;
            await say(message);
        },
        (err) => console.error(err),
    );
});
