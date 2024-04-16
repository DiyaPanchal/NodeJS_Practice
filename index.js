import express from "express";
import apiRouter from "./routes/api.js";
import logger from "./config/logger.js";
import helmet from "helmet";
import connectDB from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 3003;

app.use(helmet());

app.listen(PORT, () => {
  logger.info(`Server is listening at http://localhost:${PORT}`);
});

app.use("/", apiRouter);

connectDB();
