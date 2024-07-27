// components/Quiz.tsx
import React, { useState } from "react";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizProps {
  questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    Array(questions.length).fill("")
  );
  const [showScore, setShowScore] = useState(false);

  const handleOptionChange = (questionIndex: number, option: string) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = option;
    setSelectedOptions(newSelectedOptions);
  };

  const handleSubmit = () => {
    setShowScore(true);
  };

  const score = selectedOptions.reduce((total, option, index) => {
    if (option === questions[index].correctAnswer) {
      return total + 1;
    }
    return total;
  }, 0);

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md dark:bg-inherit">
      {showScore ? (
        <div>
          <h2 className="text-2xl font-bold">Your Score: {score}</h2>
        </div>
      ) : (
        <div>
          {questions.map((question, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-bold mb-4">{question.question}</h2>
              <ul>
                {question.options.map((option, optionIndex) => (
                  <li key={optionIndex} className="mb-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name={`quiz-${index}`}
                        value={option}
                        checked={selectedOptions[index] === option}
                        onChange={() => handleOptionChange(index, option)}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
