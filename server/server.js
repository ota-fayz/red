const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static('../public'));
app.use(express.json());

app.get('/', (req,res)=> {
    res.sendFile(__dirname + '/public/index.html')
});

app.post('/', (req,res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gorskyalex20@gmail.com',
            pass: 'kvxi2020@'
        }
    });

    // const transporter = nodemailer.createTransport({
    //     host: 'smtp.123-reg.co.uk',
    //     port: 587,
    //     // secure true,
    //     auth: {
    //         user: 'gorskyalex20@gmail.com',
    //         pass: 'kvxi2020@'
    //     }
    // });

    const mailOptions = {
        from: req.body.email,
        to: 'gorskyalex20@gmail.com' ,
        subject: `Message from website`,
        text: `Message from website`,
        html:
            `<p>
                fname: ${req.body.fname} <br> 
                lname: ${req.body.lname} <br> 
                email: ${req.body.email} <br> 
                phone: ${req.body.phone} <br>
                message: ${req.body.message}
            </p>`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success')
        }
    });

})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})