import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
// The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


async function runGemini(img: string) {
  const imagem = {
    inlineData: {
      data: img,
      mimeType: "image/jpeg"
    },
  };

  const prompt = 'essa image e uma representacao de uma conta de agua ou gas preciso medir o consumo pode me dar o dado apenas de consumo? espero que a resposta seja apenas o numero';

  const result = await model.generateContent([prompt, imagem]);
  return result.response.text();
}


export default {
  runGemini
}