import express from "express";
import bodyParser from "body-parser";
import { PORT } from "./utils/constants";
import routes from "./routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
