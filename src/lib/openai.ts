import { env } from "@/env";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

export default openai;
