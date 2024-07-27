import ResourcePage from "@/src/components/ResourcePage";
import fs from "fs";
import path from "path";
import React, { useState } from "react";

export default function page() {
  const filePath = path.join(process.cwd(), "public", "vocational.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  return <ResourcePage items={data} />;
}
