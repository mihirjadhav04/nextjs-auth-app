import nodemailer from 'nodemailer';



export const sendMail = async({email, emailType, userId}:any) => {

    try {

        // #TODO: Configure mail for usage.



        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // Use `true` for port 465, `false` for all other ports
            auth: {
              user: "maddison53@ethereal.email",
              pass: "jn7jnAPss4f63QBp6D",
            },
          });

          const mailOptions = {
            from: 'mihirjadhavofficial@gmail.com', // sender address
            to: email, // list of receivers
            subject: emailType === "VERIFY" ? "Verification of email address." : "Password Reset.", // Subject line
            html: "<b>Hello world?</b>", // html body
          }
          const mailResponse = await transporter.sendMail(mailOptions)
          console.log("Message sent: %s", mailResponse.messageId);
          return mailResponse

    } catch (error:any) {
        throw new Error(error)
    }


}