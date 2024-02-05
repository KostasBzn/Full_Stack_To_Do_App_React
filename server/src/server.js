import express from "express";
import "dotenv/config"; //if we import the dotenv to the server we dont need to import it again in any of the routes
import cors from "cors";
import connectDB from "./config/mongo-db.js";
import todoListRoutes from "./routes/todoListRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";

const app = express();
app.use(express.json());
app.use(cors(
  {
  origin: 'https://Full_Stack_To_Do_App_React.vercel.app', 
  methods: ['GET', 'POST'],
  credentials: true
};
));
connectDB();

const port = process.env.PORT;

app.use("/todos", todoListRoutes);
app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log("The server is running...");
  console.log(`http://localhost:${port}`);
});
