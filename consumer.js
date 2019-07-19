require('dotenv').config()
const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
    queueUrl: process.env.QUEUE_URL,
    handleMessage: async (message) => {
        // do some work with `message`
        const props = JSON.parse(message.Body);
        console.log('Order received', orderData);

    }
});

app.on('error', (err) => {
    console.error(err.message);
});

app.on('processing_error', (err) => {
    console.error(err.message);
});

app.start();
