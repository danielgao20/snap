// Trivia questions inspired by https://quizlet.com/59866849/super-fun-trivia-flash-cards/

export interface TriviaQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
}

export const triviaQuestions: TriviaQuestion[] = [
    {
      id: 1,
      question: "What is the only mammals that can't jump?",
      options: ["Elephants", "Hippos", "Rhinos", "Sloths"],
      correctAnswer: "Elephants"
    },
    {
      id: 2,
      question: "What is the most consumed manufactured drink in the world?",
      options: ["Coffee", "Tea", "Soda", "Beer"],
      correctAnswer: "Tea"
    },
    {
      id: 3,
      question: "What is the tallest grass in the world?",
      options: ["Wheat", "Bamboo", "Corn", "Fescue"],
      correctAnswer: "Bamboo"
    },
    {
      id: 4,
      question: "What is the hardest natural substance in the world?",
      options: ["Titanium", "Steel", "Diamond", "Graphene"],
      correctAnswer: "Diamond"
    },
    {
      id: 5,
      question: "What is the only food that doesn't spoil?",
      options: ["Twinkies", "Honey", "Dried beans", "Salt"],
      correctAnswer: "Honey"
    },
    {
      id: 6,
      question: "What is the only continent without reptiles or snakes?",
      options: ["Australia", "Europe", "Antarctica", "North America"],
      correctAnswer: "Antarctica"
    },
    {
      id: 7,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Perth", "Canberra"],
      correctAnswer: "Canberra"
    },
    {
      id: 8,
      question: "What is the largest desert in the world?",
      options: ["Sahara", "Gobi", "Kalahari", "Antarctic Desert"],
      correctAnswer: "Antarctic Desert"
    },
    {
      id: 9,
      question: "What is the biggest planet in our solar system?",
      options: ["Earth", "Saturn", "Jupiter", "Neptune"],
      correctAnswer: "Jupiter"
    },
    {
      id: 10,
      question: "What is the smallest country in the world?",
      options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
      correctAnswer: "Vatican City"
    }
];