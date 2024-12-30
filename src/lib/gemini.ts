import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
  }
});

let chatSession: any = null;

export async function initChat() {
  chatSession = model.startChat({
    history: [],
  });
  return chatSession;
}

export async function sendMessage(message: string) {
  if (!chatSession) {
    chatSession = await initChat();
  }
  
  try {
    const result = await chatSession.sendMessage(message);
    return result.response.text();
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}

export async function getTarotInterpretation(
  cards: string[],
  question: string
): Promise<string> {
  const prompt = `As a mystic Tarot reader, provide an interpretation for a ${cards.length}-card spread 
    in response to the question: "${question}". The cards drawn are: ${cards.join(', ')}. 
    Provide a cohesive reading that connects all cards and relates them to the question.
    Format your response in markdown with appropriate headers and sections.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting tarot interpretation:', error);
    throw error;
  }
}

export async function getChatResponse(
  question: string,
  context: string
): Promise<string> {
  const prompt = `As a mystic Tarot reader, respond to this follow-up question: "${question}"
    Based on the previous reading context: ${context}
    Provide insights that build upon the previous reading while addressing the specific question.
    Format your response in markdown.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting chat response:', error);
    throw error;
  }
}