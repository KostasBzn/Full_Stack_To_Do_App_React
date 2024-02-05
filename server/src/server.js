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
  origin: 'https://full-stack-to-do-app-react-xl14fronend.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true
}
));
connectDB();

const port = process.env.PORT;

app.use("/todos", todoListRoutes);
app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log("The server is running...");
  console.log(`http://localhost:${port}`);
});
