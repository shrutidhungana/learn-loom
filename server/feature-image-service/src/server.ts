import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import featureImageRoutes from "./routes/featureImageRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_BASE_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/feature-image", featureImageRoutes);

app.get("/", (req, res) => {
  res.send("Feature Image Service Running");
});

app.listen(PORT, () => {
  console.log(`🚀 Feature Image Service listening on port ${PORT}`);
});
