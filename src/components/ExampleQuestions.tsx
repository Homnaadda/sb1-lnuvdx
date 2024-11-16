import React from 'react';
import { LightbulbIcon } from 'lucide-react';

interface ExampleQuestionsProps {
  onQuestionClick: (question: string) => void;
}

export const ExampleQuestions: React.FC<ExampleQuestionsProps> = ({ onQuestionClick }) => {
  const questions = [
    "What is phishing and how to prevent it?",
    "Explain SQL injection attacks",
    "What is a DDoS attack?",
    "How does social engineering work?",
    "What is Zero Trust security?",
    "How to handle security incidents?"
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-gray-600">
        <LightbulbIcon className="w-4 h-4" />
        <span className="text-sm font-medium">Example Questions</span>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {questions.map((question) => (
          <button
            key={question}
            onClick={() => onQuestionClick(question)}
            className="text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}