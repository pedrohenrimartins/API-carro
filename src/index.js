import 'dotenv/config'
import cors from 'cors'
import express, { json } from 'express'

import carrocontroler from './controller/carrocontroler.js'

const server = express();
server.use(cors());
server.use(json());
server.use(carrocontroler)




server.listen(process.env.PORT, () => console.log(`subiu a api dlç, na porta: ${process.env.PORT}`));