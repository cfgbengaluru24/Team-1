"use client";

import Sidebar from "../../src/components/Sidebar";
import MainContent from "../../src/components/MainContent";
import { useState } from "react";

export default function Page() {
  const [activeNo, setActiveNo] = useState(1);
  return (
    <div className="h-screen flex ">
      <Sidebar activeNo={activeNo} setActiveNo={setActiveNo} />
      <MainContent activeNo={activeNo} />
    </div>
  );
}
