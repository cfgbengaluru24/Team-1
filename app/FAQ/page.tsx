"use client";
import ResourcePage from "@/src/components/ResourcePage";
import axios from "axios";

import React, { useState, useEffect } from "react";

export default function page() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const response = await axios.get("/api/training-centers");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCenters();
  }, []);

  if (isLoading) {
    return <p>loading</p>;
  }
  // console.log(data);
  return <ResourcePage items={data} />;
}
