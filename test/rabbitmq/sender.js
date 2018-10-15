/**
 * @author whis admin@wwhis.com
 * @Created 10/15/18
 */
const amqp = require('amqplib');

const queue = "demo";

async function sendMessage(message) {
    const connection = await amqp.connect("amqp://whis:7@wwhis.com:5672");
    const channel = await connection.createChannel();
    await channel.assertQueue(queue);
    await channel.sendToQueue(queue, Buffer.alloc(Buffer.byteLength(message, "utf8"), message), {
        persistent: true
    })
}

setInterval(function () {
    sendMessage("Hello, Whis");
}, 1000)

// sendMessage("hello, whis")
