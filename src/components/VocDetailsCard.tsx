// components/DetailsCard.tsx
import React from "react";

interface Details {
  ADDRESS1: string;
  ADDRESS2: string;
  CAAF_NUMBER: string;
  DISTRICT_NAME: string;
  JOB_ROLE_NAME: string;
  TRAINING_CENTER_NAME: string;
  VTP_NAME: string;
  VTP_NUMBER: string;
}

const VocDetailsCard: React.FC<Details> = ({ voc }) => {
  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-2">{voc["JOB ROLE NAME"]}</h2>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>CAAF Number:</strong> {voc["CAAF NUMBER"]}
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>District Name:</strong> {voc["DISTRICT NAME"]}
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>Address 1:</strong> {voc["ADDRESS1"]}
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>Address 2:</strong> {voc["ADDRESS2"]}
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>Training Center Name:</strong> {voc["TRAINING CENTER NAME"]}
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>VTP Name:</strong> {voc["VTP NAME"]}
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>VTP Number:</strong> {voc["VTP NUMBER"]}
      </p>
    </div>
  );
};

export default VocDetailsCard;
