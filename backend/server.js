import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";


const app = express();
const PORT = parseInt(process.env.PORT || '8000', 10);

app.use(express.json());
dotenv.config();

app.use("/api/auth", authRoutes);


//app.get("/", (req, res) => {
  //  res.send("Test route working");
  //});

app.listen(PORT,'0.0.0.0', () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});