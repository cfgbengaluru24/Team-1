"use client";

import { useState } from 'react';
import Sidebar from '../../src/components/Sidebar';
import MainContent from '../../src/components/MainContent';

export default function Home() {
  const [activeNo,setActiveNo] = useState(1);
  return (
    <div className="h-screen flex">
      <Sidebar activeNo={activeNo} setActiveNo={setActiveNo}  />
      <MainContent activeNo={activeNo} />
    </div>
  );
}
