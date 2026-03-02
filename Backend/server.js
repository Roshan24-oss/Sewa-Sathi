import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import providerRoutes from "./routes/providerRoutes.js";
import requestRoutes from "./routes/requestRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js"; // ✅ Add this
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";
import { Server } from "socket.io";

dotenv.config();
connectDB();

const app = express();

// ✅ Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/provider", providerRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api", notificationRoutes); // ✅ Add notification routes

app.get("/", (req, res) => {
  res.send("Server is running...");
});

// ✅ Create server + socket.io
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

// Make io accessible in controllers
app.set("io", io);

// ✅ Socket.io connection
io.on("connection", (socket) => {
  console.log("User Connected: ", socket.id);

  // Join user room
  socket.on("join", (userId) => {
    socket.join(userId);
    console.log("User Joined Room: ", userId);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected: ", socket.id);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});