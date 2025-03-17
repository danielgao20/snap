"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft } from "lucide-react";
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TriviaQuestion from '@/components/trivia/TriviaQuestion';
import ScoreDisplay from '@/components/trivia/ScoreDisplay';
import { triviaQuestions, TriviaQuestion as TriviaQuestionType } from '@/lib/triviaData';
import { Button } from "@/components/ui/button";

export default function TriviaPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [quizComplete, setQuizComplete] = useState<boolean>(false);
  const [questions, setQuestions] = useState<TriviaQuestionType[]>([]);

  // Initialize and shuffle questions
  useEffect(() => {
    const shuffledQuestions = [...triviaQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions);
  }, []);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);
    
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    
    // Move to next question after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsAnswered(false);
        setSelectedAnswer(null);
      } else {
        setQuizComplete(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    // Shuffle questions again
    const shuffledQuestions = [...triviaQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions);
    
    // Reset state
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setQuizComplete(false);
  };

  // Wait for questions to be loaded
  if (questions.length === 0) {
    return <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">Loading questions...</div>
      </main>
      <Footer />
    </div>;
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Exercises
            </Button>
          </Link>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Brain Warm-up Trivia</h1>
          
          {!quizComplete ? (
            <div className="space-y-6">
              <div className="flex justify-between">
                <div>Question {currentQuestionIndex + 1} of {questions.length}</div>
                <div>Score: {score}</div>
              </div>
              
              <TriviaQuestion 
                question={questions[currentQuestionIndex].question}
                options={questions[currentQuestionIndex].options}
                onAnswer={handleAnswer}
                isAnswered={isAnswered}
                selectedAnswer={selectedAnswer}
                correctAnswer={questions[currentQuestionIndex].correctAnswer}
              />
            </div>
          ) : (
            <ScoreDisplay 
              score={score}
              totalQuestions={questions.length}
              onRestart={restartQuiz}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}