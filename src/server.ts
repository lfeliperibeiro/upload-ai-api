import { fastify } from "fastify";
import {fastifyCors} from '@fastify/cors'
import { getAllPromptRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";
import { createTranscriptionRoute } from "./routes/create-transcription";
import { generateAITranscriptionRoute } from "./routes/generate-ai-completion";

const app = fastify()

app.register(fastifyCors, {
  origin: '*',
})

app.register(getAllPromptRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAITranscriptionRoute)

app.listen({
  port: 3333,
}).then(() => {
  console.log('listening on port 3333')
})