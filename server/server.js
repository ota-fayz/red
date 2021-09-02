require('dotenv').config();
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const path = require('path');

const PORT = process.env.PORT || 5000;
const email = process.env.EMAIL;
const pass = process.env.PASS;

//Middleware
app.use(express.static(path.join(`${__dirname}`, '../static')));
app.use(express.json());

app.get('/', (req,res)=> {
    const mainPath = path.join(`${__dirname}`, '../static', "index.html");
    res.sendFile(`${mainPath}`);
});

app.post('/', (req,res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: `${email}`,
            pass: `${pass}`
        }
    }));

    // const transporter = nodemailer.createTransport({
    //     host: 'smtp.123-reg.co.uk',
    //     port: 587,
    //     // secure true,
    //     auth: {
    //         user: '',
    //         pass: ''
    //     }
    // });

    const mailOptions = {
        from: req.body.email,
        to: 'gorskyalex20@gmail.com' ,
        subject: `Message from website Red Mountain`,
        html:
            `<p>
                First name: ${req.body.fname} <br> 
                Last name: ${req.body.lname} <br> 
                Email: ${req.body.email} <br> 
                Phone: ${req.body.phone} <br>
                Message: ${req.body.message}
            </p>`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    });

})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})