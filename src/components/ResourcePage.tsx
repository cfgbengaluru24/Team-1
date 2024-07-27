// components/ResourcePage.tsx
"use client";
import { useState, ChangeEvent } from "react";
import ResourceContent from "./ResourceContent";

const ResourcePage = ({ items }) => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState([]);
  const [voc, setVoc] = useState(null);
  //   console.log(items);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filteredItems = items.filter((item) =>
        item["JOB ROLE NAME"].toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredItems);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <aside className=" w-96 bg-gray-200 dark:bg-gray-800 p-4">
        <div className="relative w-full max-w-md mx-auto">
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded mb-4"
          />
          {suggestions.length > 0 && (
            <ul className="absolute z-10 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg mt-1">
              {suggestions.map((item, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer text-gray-700"
                  onClick={() => {
                    setQuery(item["VTP NAME"]);
                    setSuggestions([]);
                    setVoc(item);
                  }}
                >
                  {item["VTP NAME"]}
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
      <ResourceContent voc={voc} />
    </div>
  );
};

export default ResourcePage;
