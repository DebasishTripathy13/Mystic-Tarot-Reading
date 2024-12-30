import React from 'react';
import { TarotReading } from '../types';
import { formatDate } from '../lib/utils';
import { Clock } from 'lucide-react';

interface ReadingHistoryProps {
  readings: TarotReading[];
  onSelect: (reading: TarotReading) => void;
}

export function ReadingHistory({ readings, onSelect }: ReadingHistoryProps) {
  return (
    <div className="space-y-4">
      {readings.map((reading) => (
        <button
          key={reading.id}
          onClick={() => onSelect(reading)}
          className="w-full text-left bg-white/5 hover:bg-white/10 p-4 rounded-lg transition-colors"
        >
          <div className="flex items-center gap-2 text-purple-200 mb-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{formatDate(reading.date)}</span>
          </div>
          <p className="text-white font-medium">{reading.question}</p>
        </button>
      ))}
    </div>
  );
}