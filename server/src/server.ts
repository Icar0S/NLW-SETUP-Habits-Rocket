//Back-end API RESTful
//utilizando fastify

import Fastify from "fastify";
import cors from '@fastify/cors'
import { appRoutes } from "./routes"

const app = Fastify()

//caso a aplicação fosse para produção deve especificar 
//o http que podera consumir o back-end
app.register(cors)
app.register(appRoutes)

/**
 * Metodo Http: get, post, put, patch, delete
*/


app.listen({
  port: 3333,
  host: '0.0.0.0',
}).then(() => {
  console.log('SERVER RUNNING...')
})