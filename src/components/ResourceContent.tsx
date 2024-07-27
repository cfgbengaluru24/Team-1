import React from "react";
import VocDetailsCard from "./VocDetailsCard";

export default function ResourceContent({ voc }) {
  if (!voc) {
    return <div className="flex-1 p-4">START searching ...</div>;
  }
  console.log(voc);
  return (
    <div className="flex-1 p-4 flex justify-center items-center">
      <div className="max-w-md  ">
        <VocDetailsCard voc={voc} />
      </div>
    </div>
  );
}
