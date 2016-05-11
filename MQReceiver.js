/**
 * Created by Nawfal on 11-May-16.
 */
var mqlight    = require('mqlight');
var mqReceiver = mqlight.createClient({service: 'amqp://localhost'});
mqReceiver.on('started', function () {
    mqReceiver.subscribe('/news/technology');
    mqReceiver.on('message', function (data, delivery) {
        console.log(data);
    })
});