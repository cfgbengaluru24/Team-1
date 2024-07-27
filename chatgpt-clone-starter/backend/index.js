import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import url, { fileURLToPath } from "url";
import ImageKit from "imagekit";
import mongoose from "mongoose";
import Chat from "./models/chat.js";
import UserChats from "./models/userChats.js";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const port = process.env.PORT || 3000;
const app = express();

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};

// const imagekit = new ImageKit({
//   urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
//   publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
//   privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
// });



app.post("/api/chats", ClerkExpressRequireAuth(), async (req, res) => {
  const userId = req.auth.userId;
  const { text } = req.body;

  try {
    // CREATE A NEW CHAT
    const newChat = new Chat({
      userId: userId,
      history: [{ role: "user", parts: [{ text }] }],
    });

    const savedChat = await newChat.save();

    // CHECK IF THE USERCHATS EXISTS
    const userChats = await UserChats.find({ userId: userId });

    // IF DOESN'T EXIST CREATE A NEW ONE AND ADD THE CHAT IN THE CHATS ARRAY
    if (!userChats.length) {
      const newUserChats = new UserChats({
        userId: userId,
        chats: [
          {
            _id: savedChat._id,
            title: text.substring(0, 40),
          },
        ],
      });

      await newUserChats.save();
    } else {
      // IF EXISTS, PUSH THE CHAT TO THE EXISTING ARRAY
      await UserChats.updateOne(
        { userId: userId },
        {
          $push: {
            chats: {
              _id: savedChat._id,
              title: text.substring(0, 40),
            },
          },
        }
      );

      res.status(201).send(newChat._id);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating chat!");
  }
});

// app.get("/api/userchats", ClerkExpressRequireAuth(), async (req, res) => {
//   const userId = req.auth.userId;

//   try {
//     const userChats = await UserChats.find({ userId });
//     console.log("userchats", userChats);
//     res.status(200).send(userChats[0].chats);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Error fetching UserChats!");
//   }
// });

app.get("/api/userchats", ClerkExpressRequireAuth(), async (req, res) => {
  const userId = req.auth.userId;

  try {
    // Simulate hardcoded user chats
    const userChats = [
      { _id: "1", title: "Chat with Alice" },
      { _id: "2", title: "Chat with Bob" }
    ];

    res.status(200).send(userChats);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching UserChats!");
  }
});


app.get("/api/chats/:id", ClerkExpressRequireAuth(), async (req, res) => {
  const userId = req.auth.userId;

  try {
    // Simulate a hardcoded chat object
    const chat = {
      _id: req.params.id,
      userId: userId,
      history: [
        { role: "user", parts: [{ text: "What's the weather like?" }] },
        { role: "model", parts: [{ text: "It's sunny and warm today!" }] },
        { role: "user", parts: [{ text: "Great! Any fun activities planned?" }] },
        { role: "model", parts: [{ text: "Maybe a picnic in the park!" }] }
      ],
      // Hardcoded image URL
      img: "https://via.placeholder.com/400x300.png?text=Placeholder+Image"
    };

    res.status(200).send(chat);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching chat!");
  }
});


app.put("/api/chats/:id", ClerkExpressRequireAuth(), async (req, res) => {
  const userId = req.auth.userId;
  console.log("userID from clerk",userId);

  const { question, answer, img } = req.body;

  const newItems = [
    ...(question
      ? [{ role: "user", parts: [{ text: question }], ...(img && { img }) }]
      : []),
    { role: "model", parts: [{ text: answer }] },
  ];

  try {
    const updatedChat = await Chat.updateOne(
      { _id: req.params.id, userId },
      {
        $push: {
          history: {
            $each: newItems,
          },
        },
      }
    );
    res.status(200).send(updatedChat);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error adding conversation!");
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(401).send("Unauthenticated!");
});

// PRODUCTION
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

app.listen(port, () => {
  connect();
  console.log("Server running on 3000");
});
