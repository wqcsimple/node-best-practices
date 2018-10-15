/**
 * @author whis admin@wwhis.com
 * @Created 10/15/18
 */
const amqp = require("amqplib");

const queue = "demo";

async function receiveMessage()
{
    const connection = await amqp.connect("amqp://whis:7@wwhis.com:5672");
    const channel = await connection.createChannel();
    await channel.assertQueue(queue);
    await channel.consume(queue, function(message)
    {
        console.log(message.content.toString());
        channel.ack(message);
    });
}


receiveMessage();
