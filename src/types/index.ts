export interface TarotReading {
  id: string;
  date: string;
  question: string;
  cards: {
    name: string;
    isReversed: boolean;
  }[];
  interpretation: string;
  chat: ChatMessage[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: string;
}