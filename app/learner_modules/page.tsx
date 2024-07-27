import React from "react";
import Sidebar from "../../src/components/Sidebar";

export default function Page() {
  //authenticated user
  const user = "trainer A";
  return (
    <div className=" grid grid-cols-5 h-full">
      <Sidebar />
      <div className=" col-span-4 bg-red-50">content</div>
    </div>
  );
}
