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

exports.enviarEmail = functions.https.onCall(
    ({assunto, destinatarios, corpo}) => {
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
