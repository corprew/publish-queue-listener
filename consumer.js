require('dotenv').config()
const { Consumer } = require('sqs-consumer');
var MessageHandler = require('./message_handler.js')

var draft_bucket = process.env.DRAFT_BUCKET;
var publish_bucket = process.env.PUB_BUCKET;


const app = Consumer.create({
    queueUrl: process.env.QUEUE_URL,
    handleMessage: async (message) => {
        //
        // send to message_handler.js to make it easily
        // to abstract out the parts that need to be tested.
        // 
        MessageHandler.handleMessage(message);
    }
});

app.on('error', (err) => {
    console.error(err.message);
});

app.on('processing_error', (err) => {
    console.error(err.message);
});

app.start();
