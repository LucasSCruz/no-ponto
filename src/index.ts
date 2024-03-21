const dotenv = require("dotenv");
dotenv.config();

import { RegistraPonto } from "./api";
import { MongoConnection } from "./external/mongo/mongo";
// import { RabbitMQManager } from "./external/rabbitmq/rabbitmq";

MongoConnection.start()

const registraPonto = new RegistraPonto();
registraPonto.start();

// const rabbitMQManager = new RabbitMQManager();
// rabbitMQManager.consumerQueuePagamentos();
// rabbitMQManager.consumerQueuePedidosProntos();
