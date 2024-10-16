import dotenv from "dotenv";
dotenv.config();
import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = process.env.CLIENT_URL as string;

const corsOptions = {
  credentials: true,
  origin: [allowedOrigins],
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
};

app.use(cors(corsOptions));

// app.use('/api/patients')
// app.use('/api/auth-requests')

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res
    .status(400)
    .json({ error: err?.message || "Something went wrong", success: false });
});

app.listen(process.env.PORT, () => {
  console.log(`server listening at PORT:${process.env.PORT}`);
});

export default app;
