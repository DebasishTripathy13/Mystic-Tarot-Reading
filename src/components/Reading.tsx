import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { TarotCard } from './TarotCard';
import { Chat } from './Chat';
import { QuestionInput } from './QuestionInput';
import { ReadingHistory } from './ReadingHistory';
import { tarotDeck } from '../data/tarotCards';
import { getTarotInterpretation } from '../lib/gemini';
import { saveReading, updateReading, getReadings } from '../lib/storage';
import { TarotReading, ChatMessage } from '../types';
import { Sparkles, RefreshCcw, MessageCircle, History } from 'lucide-react';

export function Reading() {
  const [selectedCards, setSelectedCards] = useState(() => getNewCards());
  const [question, setQuestion] = useState<string>('');
  const [reading, setReading] = useState<TarotReading | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [readings, setReadings] = useState<TarotReading[]>([]);

  useEffect(() => {
    setReadings(getReadings());
  }, []);

  function getNewCards() {
    const shuffled = [...tarotDeck].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3).map(card => ({
      ...card,
      isReversed: Math.random() > 0.5,
      isRevealed: false
    }));
  }

  const handleNewReading = () => {
    setSelectedCards(getNewCards());
    setReading(null);
    setShowChat(false);
    setQuestion('');
    setShowHistory(false);
  };

  const handleQuestionSubmit = (newQuestion: string) => {
    setQuestion(newQuestion);
    setSelectedCards(cards => 
      cards.map(card => ({ ...card, isRevealed: false }))
    );
    setReading(null);
    setShowChat(false);
    setShowHistory(false);
  };

  const handleReveal = async (index: number) => {
    if (!question) {
      alert('Please enter your question first');
      return;
    }
    
    if (selectedCards[index].isRevealed) return;

    setSelectedCards(cards => 
      cards.map((card, i) => 
        i === index ? { ...card, isRevealed: true } : card
      )
    );

    const allRevealed = selectedCards.every((c, i) => 
      i === index || c.isRevealed
    );

    if (allRevealed) {
      setIsLoading(true);
      try {
        const cardDescriptions = selectedCards.map(card => 
          `${card.name} (${card.isReversed ? 'Reversed' : 'Upright'})`
        );
        const interpretation = await getTarotInterpretation(cardDescriptions, question);
        
        const newReading: TarotReading = {
          id: Date.now().toString(),
          date: new Date().toISOString(),
          question,
          cards: selectedCards.map(card => ({
            name: card.name,
            isReversed: card.isReversed
          })),
          interpretation,
          chat: []
        };
        
        setReading(newReading);
        saveReading(newReading);
        setReadings(getReadings());
      } catch (error) {
        console.error('Failed to get AI interpretation:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleNewMessage = (message: ChatMessage) => {
    if (reading) {
      const updatedReading = {
        ...reading,
        chat: [...reading.chat, message]
      };
      setReading(updatedReading);
      updateReading(updatedReading);
      setReadings(getReadings());
    }
  };

  const handleSelectReading = (selectedReading: TarotReading) => {
    setReading(selectedReading);
    setQuestion(selectedReading.question);
    setShowHistory(false);
    setShowChat(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif text-white mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8" />
            Mystic Tarot Reading
            <Sparkles className="w-8 h-8" />
          </h1>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  title="View history"
                >
                  <History className="w-5 h-5 text-purple-200" />
                </button>
                {question && (
                  <button 
                    onClick={handleNewReading}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                    title="New reading"
                  >
                    <RefreshCcw className="w-5 h-5 text-purple-200" />
                  </button>
                )}
              </div>
              
              {showHistory ? (
                <ReadingHistory 
                  readings={readings}
                  onSelect={handleSelectReading}
                />
              ) : (
                <>
                  {question ? (
                    <p className="text-purple-200 text-lg font-serif">{question}</p>
                  ) : (
                    <QuestionInput 
                      onSubmit={handleQuestionSubmit}
                      placeholder="What would you like to know?"
                    />
                  )}
                </>
              )}
            </div>
          </div>
          
          {question && !showHistory && (
            <p className="text-purple-200">Click each card to reveal your reading</p>
          )}
        </div>

        {question && !showHistory && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {selectedCards.map((card, index) => (
              <TarotCard
                key={index}
                card={card}
                isReversed={card.isReversed}
                isRevealed={card.isRevealed}
                onClick={() => handleReveal(index)}
              />
            ))}
          </div>
        )}

        {reading && !showHistory && (
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-serif">Your Reading</h2>
                <button
                  onClick={() => setShowChat(!showChat)}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  {showChat ? 'Hide Chat' : 'Ask Questions'}
                </button>
              </div>
              
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                className="prose prose-invert max-w-none"
              >
                {reading.interpretation}
              </ReactMarkdown>
            </div>

            {showChat && (
              <Chat
                messages={reading.chat}
                readingContext={reading.interpretation}
                onNewMessage={handleNewMessage}
              />
            )}
          </div>
        )}

        {isLoading && (
          <div className="flex items-center justify-center gap-2 text-white">
            <div className="animate-spin">
              <RefreshCcw className="w-5 h-5" />
            </div>
            <span>Generating interpretation...</span>
          </div>
        )}
      </div>
    </div>
  );
}