import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Send } from 'lucide-react';
import { ChatMessage } from '../types';
import { getChatResponse } from '../lib/gemini';

interface ChatProps {
  messages: ChatMessage[];
  readingContext: string;
  onNewMessage: (message: ChatMessage) => void;
}

export function Chat({ messages, readingContext, onNewMessage }: ChatProps) {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date().toISOString(),
    };
    onNewMessage(userMessage);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getChatResponse(input, readingContext);
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: response,
        timestamp: new Date().toISOString(),
      };
      onNewMessage(aiMessage);
    } catch (error) {
      console.error('Failed to get AI response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 space-y-4">
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${
              message.role === 'user' ? 'ml-auto bg-purple-600' : 'bg-gray-700'
            } rounded-lg p-3 max-w-[80%]`}
          >
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              className="prose prose-invert max-w-none"
            >
              {message.content}
            </ReactMarkdown>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a follow-up question..."
          className="flex-1 bg-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-purple-600 p-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}