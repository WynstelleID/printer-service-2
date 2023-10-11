// index.js
const express = require("express");
const app = express();
const PORT = 4000;
// const cors = require("cors");

// const escpos = require("escpos");
// // install escpos-usb adapter module manually
// escpos.USB = require("escpos-usb");
// // Select the adapter based on your printer type
// const device = new escpos.USB();
// // const device  = new escpos.Network('localhost');
// // const device  = new escpos.Serial('/dev/usb/lp0');
// const options = { encoding: "GB18030" /* default */ };
// const printer = new escpos.Printer(device, options);

// const corsOptions = {
//   origin: "http://localhost:3000",
//   methods: "POST",
// };

// app.use(express.json());
// app.use(cors(corsOptions));

app.get("/home", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});

// app.post("/print", (req, res) => {
//   const { message } = req.body;

//   try {
//     device.open((error) => {
//       if (error) {
//         console.error("Error opening printer:", error);
//         throw new Error("Failed to open printer");
//       }

//       printer
//         .font("a")
//         .align("ct")
//         .style("bu")
//         .size(1, 1)
//         .text(message)
//         .qrimage(message, (err) => {
//           if (err) {
//             console.error("Error printing QR code:", err);
//             device.close();
//             throw new Error("Failed to print QR code");
//           }

//           printer.cut();
//           printer.close();
//           res
//             .status(200)
//             .json({ success: true, message: "Printed successfully" });
//         });
//     });
//   } catch (error) {
//     console.error("Error occurred while printing:", error);
//     res
//       .status(500)
//       .json({ success: false, error: "Error occurred while printing" });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app;
