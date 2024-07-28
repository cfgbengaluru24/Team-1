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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">Training Centers</h1>
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold">{voc.JOB_ROLE_NAME}</h2>
          <p>
            <strong>VTP Number:</strong> {voc.VTP_NUMBER}
          </p>
          <p>
            <strong>VTP Name:</strong> {voc.VTP_NAME}
          </p>
          <p>
            <strong>District Name:</strong> {voc.DISTRICT_NAME}
          </p>
          <p>
            <strong>CAAF Number:</strong> {voc.CAAF_NUMBER}
          </p>
          <p>
            <strong>Training Center Name:</strong> {voc.TRAINING_CENTER_NAME}
          </p>
          <p>
            <strong>Address 1:</strong> {voc.ADDRESS1}
          </p>
          <p>
            <strong>Address 2:</strong> {voc.ADDRESS2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VocDetailsCard;
