import React from 'react';
import type { TarotCard as TarotCardType } from '../data/tarotCards';

interface TarotCardProps {
  card: TarotCardType;
  isReversed: boolean;
  onClick: () => void;
  isRevealed: boolean;
}

export function TarotCard({ card, isReversed, onClick, isRevealed }: TarotCardProps) {
  return (
    <div 
      className={`relative cursor-pointer transition-transform duration-700 transform hover:scale-105
        ${isRevealed ? '' : 'bg-indigo-900'}
        ${isReversed ? 'rotate-180' : ''}
      `}
      onClick={onClick}
    >
      {isRevealed ? (
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img 
            src={card.image} 
            alt={card.name}
            className="w-full h-96 object-cover"
          />
          <div className="p-4 bg-white">
            <h3 className="text-xl font-semibold mb-2">{card.name}</h3>
            <p className="text-sm text-gray-600">
              {isReversed ? card.meaningReversed : card.meaningUpright}
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full h-96 rounded-lg bg-gradient-to-br from-indigo-900 to-purple-900 shadow-xl flex items-center justify-center">
          <div className="text-white opacity-50 text-4xl font-serif">✧</div>
        </div>
      )}
    </div>
  );
}