import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import "./database";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  //Verifica se é uma instancia do tipo Error
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

app.listen(process.env.PORT || process.env.SERVER_PORT, () =>
  console.log(`[*] Server running on port: ${process.env.SERVER_PORT}`)
);
