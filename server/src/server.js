import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/mongo-db.js";
import todoListRoutes from "./routes/todoListRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
connectDB();

const port = process.env.PORT;

app.use("/todos", todoListRoutes);
app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log("The server is running...");
  console.log(`http://localhost:${port}`);
});
