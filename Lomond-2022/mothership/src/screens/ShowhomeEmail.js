
   
// import { Mailer } from 'nodemailer-react'

export const ShowhomeEmail = ({ firstName, password, newAccount, brand }) => ({
  subject: newAccount ? `Welcome to ${brand}!` : `Your new ${brand} password.`,
  body: (
    <body>
      <h1>Hello {firstName},</h1>
      <p>Your password is:</p>
      <p>{password}</p>
    </body>
  ),
})