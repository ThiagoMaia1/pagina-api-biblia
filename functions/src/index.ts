"use strict";
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const enderecoEmail = functions.config().email.address;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: enderecoEmail,
    pass: functions.config().email.password,
  },
});

type EmailData = {
  assunto : string,
  destinatarios : string[],
  corpo : string,
  // corpoHTML : string,
  // anexos : any
}
exports.enviarEmail = functions.https.onCall(({assunto, destinatarios, corpo} : EmailData) => {
  const remetente = "\"Api Bíblia Humana\" <" + enderecoEmail + ">";

  const email = {
    from: remetente,
    to: destinatarios || [enderecoEmail],
    subject: assunto,
    text: corpo,
    // html: corpoHTML,
    // attachments: anexos
  };

  return transporter.sendMail(email);
});
