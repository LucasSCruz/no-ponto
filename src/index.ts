const dotenv = require("dotenv");
dotenv.config();

import { RegistraPonto } from "./api";
import { MongoConnection } from "./external/mongo/mongo";

MongoConnection.start()

const registraPonto = new RegistraPonto();
registraPonto.start();

