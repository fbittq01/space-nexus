import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = formidable({ multiples: true });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: "Error parsing the files" });
      }

      const {
        name,
        representing,
        XAccount,
        contact,
        message,
        usingPersonInfo,
        acceptPolicy,
      } = fields;

      let attachments = [];
      if (files.file) {
        if (Array.isArray(files.file)) {
          attachments = files.file.map((file) => ({
            filename: file.originalFilename,
            path: file.filepath,
          }));
        } else {
          attachments.push({
            filename: files.file.originalFilename,
            path: files.file.filepath,
          });
        }
      }

      let transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: "false" === "true", // true cho cổng 465, false cho các cổng khác
        auth: {
          user: "webdatanexus@outlook.com", // your email
          pass: "quangmanh01", // your email password
        },
      });

      try {
        await transporter.sendMail({
          from: "webdatanexus@outlook.com",
          to: "Contactandsupport@web3nexus.space",
          subject: "New Contact Form Submission",
          html: `<p><strong>Name:</strong> ${name}</p>
                 <p><strong>ARE YOU REPRESENTING YOURSELF, AN INDIVIDUAL, A PROJECT, AN ORCANIZATION, OR SOMETHING ELSE?
                 PLEASE DESCRIBE BRIEFLY.:</strong> ${representing}</p>
                 <p><strong>THE X ACCOUNT OF. THE ENTITY YOU REPRESENT?</strong> ${XAccount}</p>
                 <p><strong>CONTACT DETAILS FOR THIS ENTITY?</strong> ${contact}</p>
                 <p><strong>WHAT ARE YOU READY FOR? ARE YOU PREPARED TO BE PART OF OUR NETWORK?</strong> ${message}</p>
                 <p><strong>PLEASE CHECK HERE IF YOU AGREE TO LET US STORE AND CATEGORIZE THE INFORMATION YOU HAVE SUBMITTED (REQUIRED).</strong> ${usingPersonInfo}</p>
                 <p><strong>PLEASE CHECK HERE IF YOU HAVE FULLY READ AND AGREE TO THE TERMS OF SERVICE AND PRIVACY POLICY (REQUIRED).</strong> ${acceptPolicy}</p>`,
          attachments: attachments,
        });

        res.status(200).json({ message: "Email sent successfully" });
      } catch (error) {
        res.status(500).json({ error: "Failed to send email", details: error });
      }
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
