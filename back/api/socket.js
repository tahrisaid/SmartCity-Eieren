var net = require('net');
var JsonSocket = require('json-socket');
var port1 = 4545;
var server = net.createServer();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'eierengod@gmail.com',
        pass: 'eieren2018'
    }
});

var mailOptions = {
    from: 'eierengod@gmail.com',
    to: 'said.tahri@esprit.tn',
    subject: 'Eieren app | Thread alert!!!',
    text: 'Yo, this is Eieren. I am sending you this email to warn you about a threat in your area. Please be carreful!'
};

server.listen(port1);
