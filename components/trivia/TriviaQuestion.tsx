"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

interface TriviaQuestionProps {
    question: string;
    options: string[];
    onAnswer: (answer: string) => void;
    isAnswered: boolean;
    selectedAnswer: string | null;
    correctAnswer: string;
  }

const TriviaQuestion: React.FC<TriviaQuestionProps> = ({
    question, 
    options, 
    onAnswer, 
    isAnswered, 
    selectedAnswer, 
    correctAnswer 
}) => {
    return (
        <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">{question}</h3>
        <div className="space-y-3">
            {options.map((option, index) => {
            // Determine button color based on answer state
            let buttonClasses = "w-full text-left";
            
            if (isAnswered) {
                if (option === correctAnswer) {
                buttonClasses += " bg-emerald-700/80 hover:bg-emerald-800 text-white";
                } else if (option === selectedAnswer) {
                buttonClasses += " bg-rose-700/80 hover:bg-rose-800 text-white";
                } else {
                buttonClasses += " bg-gray-700 hover:bg-gray-800";
                }
            } else {
                buttonClasses += " bg-gray-700 hover:bg-gray-800";
            }
            
            return (
                <Button 
                key={index}
                className={buttonClasses}
                onClick={() => onAnswer(option)}
                disabled={isAnswered}
                >
                {option}
                </Button>
            );
            })}
        </div>
        </div>
    );
};

export default TriviaQuestion;