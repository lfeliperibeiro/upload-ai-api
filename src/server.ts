import { fastify } from "fastify";
import { getAllPromptRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";

const app = fastify()

app.register(getAllPromptRoute)
app.register(uploadVideoRoute)

app.listen({
  port: 3333,
}).then(() => {
  console.log('listening on port 3333')
})