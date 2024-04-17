var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'josuesmjr.mongan@gmail.com',
        pass: 'password'
    }
});

var mailOptions = {
    from: 'josuesmjr.mongan@gmail.com',
    to: 'josuesmjr.mongan@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'This is a test! That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});