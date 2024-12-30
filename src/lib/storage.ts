import { TarotReading } from '../types';

const STORAGE_KEY = 'tarot-readings';

export function saveReading(reading: TarotReading): void {
  const readings = getReadings();
  readings.unshift(reading);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(readings));
}

export function getReadings(): TarotReading[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function getReading(id: string): TarotReading | undefined {
  return getReadings().find(reading => reading.id === id);
}

export function updateReading(reading: TarotReading): void {
  const readings = getReadings();
  const index = readings.findIndex(r => r.id === reading.id);
  if (index !== -1) {
    readings[index] = reading;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(readings));
  }
}