/**
 * Created by Nawfal on 11-May-16.
 */
var mqLight  = require('mqlight');
var mqClient = mqLight.createClient({service: 'amqp://localhost'});
mqClient.on('started', function () {
    mqClient.send('news/technology', 'hello world');
});