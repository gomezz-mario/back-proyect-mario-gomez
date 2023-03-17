import express from "express";
import { port } from "./config/config.js";
import productRouter from "./routes/product.routes.js";
import mockRouter from "./routes/mocks.routes.js"
import { errorsMidleware } from "./services/services.index.js";

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/product', productRouter);
app.use('/api/mock', mockRouter);
app.use(errorsMidleware);

app.listen(port);
console.log('server listen on port ', port);