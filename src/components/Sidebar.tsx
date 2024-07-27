import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Sidebar</h1>
      <ul>
        <li className="mb-2"><a href="#">Link 1</a></li>
        <li className="mb-2"><a href="#">Link 2</a></li>
        <li className="mb-2"><a href="#">Link 3</a></li>
        <li className="mb-2"><a href="#">Link 4</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
