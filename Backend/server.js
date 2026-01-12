import express from "express";
import dotenv from "dotenv"; // Import it this way
dotenv.config(); // Initialize it immediately
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use("/api", chatRoutes);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
  connectDB();
});

const connectDB = async () => {
  const uri = process.env.MONGODB_URL; // Match the name in your .env

  if (!uri) {
    console.error("Error: MONGODB_URL is not defined in your .env file!");
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log("Database Connected");
  } catch (err) {
    console.log("Failed to connect DB:", err.message);
  }
};

//app.post("/test", async (req, res) => {
//  const options = {
//    method: "POST",
//    headers: {
//      "Content-Type": "application/json",
//      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//    },
//    body: JSON.stringify({
//      model: "gpt-40-mini",
//      messages: [
//        {
//          role: "user",
//          content: req.body.message,
//        },
//      ],
//    }),
//  };
//  try {
//    const response = await fetch(
//      "https://api.openai.com/v1/chat/completions",
//      options
//    );
//    const data = await response.json();
//    //console.log(data.choices[0].message.content); //reply
//    res.send(data.choices[0].message.content);
//  } catch (err) {
//    console.log(err);
//  }
//});
