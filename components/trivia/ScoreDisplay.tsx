"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

interface ScoreDisplayProps {
    score: number;
    totalQuestions: number;
    onRestart: () => void;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  let message = "Try again!";
  if (percentage >= 80) {
    message = "Excellent!";
  } else if (percentage >= 60) {
    message = "Good job!";
  } else if (percentage >= 40) {
    message = "Not bad!";
  }

  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
      <p className="text-xl mb-2">Your score: {score} out of {totalQuestions}</p>
      <p className="text-2xl font-bold mb-4">{percentage}%</p>
      <p className="text-xl mb-6">{message}</p>
      <Button size="lg" className="gap-2" onClick={onRestart}>
        Play Again
      </Button>
    </div>
  );
};

export default ScoreDisplay;