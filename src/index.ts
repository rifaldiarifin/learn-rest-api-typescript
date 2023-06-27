import express, { Application, Response, Request, NextFunction } from "express";

const app: Application = express();
const port: Number = 4000;

app.use("/health", (req: Request, res: Response, next: NextFunction) => {
 res.status(200).send({ statusCode: 200, status: "OK" });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
