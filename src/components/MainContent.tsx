"use client";

import { YouTubeEmbed } from "@next/third-parties/google";
import React, { useState } from "react";
import Quiz from "./QuizComponent";
import { Button } from "@/components/ui/button";

// Define the props interface
interface MainContentProps {
  activeNo: number;
}

const learning_content = [
  {
    module_title: "Goal Setting & Tower Building",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
      },
      {
        question: "What is 2 + 3?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
      },
      // Add more questions as needed
    ],
  },
  {
    module_title: "Wedding Card and Buying and Selling Game",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
      },
      // Add more questions as needed
    ],
  },
  {
    module_title: "Format free and formatted market visit",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
      },
      // Add more questions as needed
    ],
  },
  {
    module_title: "Need and wants",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
      },
      // Add more questions as needed
    ],
  },
  {
    module_title: "Eatery Game",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
      },
      // Add more questions as needed
    ],
  },

  {
    module_title: "PMA and PMA analysis",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
      },
      // Add more questions as needed
    ],
  },
  {
    module_title: "Market Strategy",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
      },
      // Add more questions as needed
    ],
  },
  {
    module_title: "PCA skills training",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
      },
      // Add more questions as needed
    ],
  },
  {
    module_title: "Pilot Business Customer Feedback",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
      },
      // Add more questions as needed
    ],
  },
  {
    module_title: "Branding Promotion",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
      },
      // Add more questions as needed
    ],
  },
  {
    module_title: "Pricing",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
      },
      // Add more questions as needed
    ],
  },
  {
    module_title: "Business Development Plan",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
      },
      // Add more questions as needed
    ],
  },
];

const customMessages = [
  "Goal Setting Game and Tower Building Game",
  "Wedding Card Game and Buying and Selling Game",
  "Format Free, Market Visit and Formatted Market Visit",
  "Need and Wants",
  "Eatery Game",
  "PMA and PMA Analysis",
  "Market Strategy",
  "PCA and Skills Training",
  "Pilot Business and Customer Feedback",
  "Branding and Promotion",
  "Pricing",
  "Business Development Plan"
];

// Use the props interface in the component
const MainContent: React.FC<MainContentProps> = ({ activeNo }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };
  return (
    <div className="flex-1 flex flex-col gap-16  p-8 overflow-auto ">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold ">
          {learning_content[activeNo - 1]["module_title"]}
        </h1>
        <div className="text-lg flex flex-col items-center">
          <Button variant="outline" onClick={toggleTheme} size={"icon"}>
            {!isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            )}
          </Button>
        </div>
      </div>
      <p className="text-xl mb-16">
        {customMessages[activeNo - 1]}
      </p>
      {/* Placeholder for video */}
      <div className="relative pb-9/16 mb-4">
        <YouTubeEmbed videoid={learning_content[activeNo - 1]["video_id"]} />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Learning Module</h2>
        <p className="text-gray-700">
          {learning_content[activeNo - 1]["content"]}
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Quiz</h2>
        <Quiz
          key={activeNo}
          questions={learning_content[activeNo - 1]["questions"]}
        />
      </div>
    </div>
  );
};

export default MainContent;
