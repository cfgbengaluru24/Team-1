import { YouTubeEmbed } from "@next/third-parties/google";
import React from "react";
import Quiz from "./QuizComponent";

// Define the props interface
interface MainContentProps {
  activeNo: number;
}

const questions = [
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
];

const learning_content = [
  {
    module_title: "module 1",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
  },
  {
    module_title: "module 2",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
  },
  {
    module_title: "module 3",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
  },
  {
    module_title: "module 4",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
  },
  {
    module_title: "module 5",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
  },

  {
    module_title: "module 6",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
  },
  {
    module_title: "module 7",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
  },
  {
    module_title: "module 8",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
  },
  {
    module_title: "module 9",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
  },
  {
    module_title: "module 10",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
  },
  {
    module_title: "module 11",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
  },
  {
    module_title: "module 5",
    content:
      "This is some placeholder text beneath the video. You can use this space to provide additional information about the learning module, instructions, or any other relevant content.",
    video_id: "dQw4w9WgXcQ",
  },
];

// Use the props interface in the component
const MainContent: React.FC<MainContentProps> = ({ activeNo }) => {
  return (
    <div className="flex-1 flex flex-col gap-16 bg-white p-8 overflow-auto">
      <h1 className="text-3xl font-bold ">Main Content - Module {activeNo}</h1>
      <p className="text-xl mb-16">
        This is the main content area for module {activeNo}.
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
        <Quiz questions={questions} />
      </div>
    </div>
  );
};

export default MainContent;
